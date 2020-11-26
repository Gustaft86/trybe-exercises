const assert = require('assert');

assert.strictEqual(typeof myFunction, 'function');

//-------------------------------------------------

const assert = require('assert');

const myFunction = () => {};

assert.strictEqual(typeof myFunction, 'function');