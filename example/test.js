var hello = require('./hello.js');
var test = require('tape');

test('hello world test', function (assert) {
	hello('World', function (err, output) {
		assert.true(output, "Hello World");
		assert.end();
	});
});
