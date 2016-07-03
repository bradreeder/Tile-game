const tape = require('tape');
const shot = require('shot');
const sinon = require('sinon');
const proxyquire = require('proxyquire');

const fsStub = {
  // readFile: sinon.stub(),
};
// const handler = require('../src/handler.js');
const handler = proxyquire('../src/handler.js', { fs: fsStub });

tape('test get request to / endpoint', t => {
  shot.inject(handler, { method: 'get', url: '/' }, (res) => {
    t.equal(res.statusCode, 200, '/ has status code of 200');
    t.ok(res.payload.includes('<!DOCTYPE'), 'finds index.html file');
    t.equal(res.headers['Content-type'], 'text/html', 'response type is html');
    t.end();
  });
});

tape('test get request returns 404 if index.html not found', t => {
  const stub = sinon.stub(fsStub, 'readFile');
  stub.yields(new Error());
  shot.inject(handler, { method: 'get', url: '/' }, (res) => {
    t.equal(res.statusCode, 404, '/ has status code of 404');
    t.ok(res.payload.includes('404'), 'returns error message to user');
    t.end();
    stub.restore();
  });
});

tape('test get requests to public endpoint', t => {
  t.test('handles requested file', (st) => {
    shot.inject(handler, { method: 'get', url: '/public/style.css' }, (res) => {
      st.plan(3);
      st.equal(res.statusCode, 200, '/public/style.css has status code of 200');
      st.ok(res.payload.includes('*'), 'finds style.css file');
      st.equal(res.headers['Content-type'], 'text/css', 'response type is css');
    });
  });
  t.test('handles multiple content-types in public folder', (st) => {
    shot.inject(handler, { method: 'get', url: '/public/createLevel.js' }, (res) => {
      st.plan(3);
      st.equal(res.statusCode, 200, '/public/createLevel.js has status code of 200');
      st.ok(res.payload.includes('function'), 'finds createLevel.js file');
      st.equal(res.headers['Content-type'], 'text/js', 'response type is js');
    });
  });
  t.test('throws an error if requested file does not exist', (st) => {
    shot.inject(handler, { method: 'get', url: '/public/jfsjlkg' }, (res) => {
      st.plan(2);
      st.equal(res.statusCode, 404, '/public/jfsjlkg has status code of 404');
      st.ok(res.payload.includes('404'), 'returns error message to user');
    });
  });
});

tape('test get requests to level endpoint', t => {
  t.test('handles a level.txt file', (st) => {
    shot.inject(handler, { method: 'get', url: '/level1.txt' }, (res) => {
      st.plan(3);
      st.equal(res.statusCode, 200, '/level1.txt has status code of 200');
      st.ok(res.payload.includes('unexplored'), 'finds level1.txt file');
      st.equal(res.headers['Content-type'], 'text/plain', 'response type is txt');
    });
  });
  t.test('throws an error if requested file does not exist', (st) => {
    shot.inject(handler, { method: 'get', url: '/level57823759.txt' }, (res) => {
      st.plan(2);
      st.equal(res.statusCode, 404, '/resources/level57823759.txt has status code of 404');
      st.ok(res.payload.includes('404'), 'returns error message to user');
    });
  });
});

tape('throws an error if requested file does not exist', (t) => {
  shot.inject(handler, { method: 'get', url: 'fhsjhdfhjkds' }, (res) => {
    t.equal(res.statusCode, 404, 'fhsjhdfhjkds has status code of 404');
    t.ok(res.payload.includes('404'), 'returns error message to user');
    t.end();
  });
});
