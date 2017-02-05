/* eslint no-console: 0 */
'use strict';

const codec = require('../lib/codec');

describe("Codec library", () => {
  it("expect 'hello 😬' to be hello \ud83d\ude2c", () => {
    expect(codec.to_unicode('hello 😬')).toBe('hello \\ud83d\\ude2c');
  });
});
