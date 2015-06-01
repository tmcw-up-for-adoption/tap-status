#!/usr/bin/env node

var Parser = require('tap-parser');

var parser = new Parser();

process.stdin.pipe(new Parser());
process.stdin.pipe(process.stdout);
process.on('exit', function () {
  if (!parser.ok) {
    process.exit(1);
  }
});
