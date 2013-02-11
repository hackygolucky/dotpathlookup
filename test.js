var assert = require('assert')
	, my_function = require('./index');


var obj = {check: {it: {out: 'woop woop'}}};

var func = my_function("check.it.out");
var result = func(obj);
assert.strictEqual(result, 'woop woop');

var dtp = my_function("check.it.out");
assert.strictEqual(typeof(dtp), "function");

var func = my_function("test_key");
var result = func({test_key: "test_val"});
assert.strictEqual(result , 'test_val');

var find = my_function("test.it.out")
var not_found = find({}) || find() || find(null)
assert.strictEqual(not_found, undefined); 

