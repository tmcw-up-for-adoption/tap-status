var test = require('tape'),
    exec = require('child_process').exec,
    fs = require('fs');

test('passing', function(t) {
    exec('node fixture/passing.js | node ./index.js',
      function (error, stdout, stderr) {
          t.notOk(error, 'no error');
          t.ok(stdout, 'has stdout');
          t.end();
    });
});

test('failing', function(t) {
    exec('node fixture/failing.js | node ./index.js',
      function (error, stdout, stderr) {
          t.equal(error.code, 1, 'has error');
          t.ok(stdout, 'no stdout');
          t.end();
    });
});

test('throwing', function(t) {
    exec('node fixture/throwing.js | node ./index.js',
      function (error, stdout, stderr) {
          t.equal(error.code, 1, 'has error');
          t.ok(stdout, 'no stdout');
          t.end();
    });
});
