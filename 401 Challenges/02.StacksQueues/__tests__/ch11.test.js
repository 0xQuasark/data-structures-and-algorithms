'use strict';

const PseudoQueue = require('../ch11');

describe('HAPPY CASE', () => {
  it('should return in order', () => {
    let test = new PseudoQueue;
    test.enqueue(('red'));
    test.enqueue(('orange'));
    test.enqueue(('green'));
    test.enqueue(('blue'));

    let result1 = test.dequeue();
    let result2 = test.dequeue();
    let result3 = test.dequeue();
    let result4 = test.dequeue();
    expect(result1).toEqual('red');
    expect(result2).toEqual('orange');
    expect(result3).toEqual('green');
    expect(result4).toEqual('blue');
  });

  it('should return a peek error', () => {
    let test = new PseudoQueue;
    test.enqueue(('red'));

    test.dequeue();
    expect(() => test.dequeue()).toThrow('Stack is empty, silly');

  });

});