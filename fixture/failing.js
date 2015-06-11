#!/usr/bin/env node

var test = require('tape');

test('equal', function(t) {
    t.equal(true, false);
    t.end();
});
