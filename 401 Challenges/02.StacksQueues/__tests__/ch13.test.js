'use strict';

const validateBrackets = require('../ch13');

describe('Brackets', () => {
  // Should return true for a string with balanced brackets
  it('should return true when the string has balanced brackets', () => {
    expect(validateBrackets('()')).toBe(true);
    expect(validateBrackets('{}')).toBe(true);
    expect(validateBrackets('[]')).toBe(true);
    expect(validateBrackets('({})')).toBe(true);
    expect(validateBrackets('[{()}]')).toBe(true);
  });

  it('should return true when the string has balanced bracket and strings inside', () => {
    expect(validateBrackets('()')).toBe(true);
    expect(validateBrackets('{}')).toBe(true);
    expect(validateBrackets('[]')).toBe(true);
    expect(validateBrackets('({})')).toBe(true);
    expect(validateBrackets('[{()}]')).toBe(true);
    expect(validateBrackets('[{(Some words here)}]')).toBe(true);
  });

  // Should return true for a string with no brackets
  it('should return true when the string has no brackets', () => {
    expect(validateBrackets('')).toBe(true);
    expect(validateBrackets('abc')).toBe(true);
    expect(validateBrackets('123')).toBe(true);
    expect(validateBrackets('Hello, World!')).toBe(true);
  });

  // Should return true for a string with only one type of brackets
  it('should return true when the string has only one type of brackets', () => {
    expect(validateBrackets('()()()')).toBe(true);
    expect(validateBrackets('{{{}}}')).toBe(true);
    expect(validateBrackets('[][][]')).toBe(true);
    expect(validateBrackets('((((()))))')).toBe(true);
  });

  // Should return false for a string with unbalanced brackets
  it('should return false when the string has unbalanced brackets', () => {
    expect(validateBrackets(')(')).toBe(false);
    expect(validateBrackets('}{')).toBe(false);
    expect(validateBrackets('][')).toBe(false);
    expect(validateBrackets(')()(')).toBe(false);
    expect(validateBrackets('}{}}{{}{')).toBe(false);
  });

  // Should return false for a string with a closing bracket before an opening bracket
  it('should return false when the string has a closing bracket before an opening bracket', () => {
    expect(validateBrackets(')(')).toBe(false);
    expect(validateBrackets('}{')).toBe(false);
    expect(validateBrackets('][')).toBe(false);
    expect(validateBrackets(')()(')).toBe(false);
    expect(validateBrackets('}{}}{{}{')).toBe(false);
  });

  // Should return false for a string with an opening bracket without a closing bracket
  it('should return false when the string has an opening bracket without a closing bracket', () => {
    expect(validateBrackets('(')).toBe(false);
    expect(validateBrackets('{')).toBe(false);
    expect(validateBrackets('[')).toBe(false);
    expect(validateBrackets('(((')).toBe(false);
    expect(validateBrackets('{{{')).toBe(false);
  });

});
