'use strict';

const Stack = require('../index');

describe('Stack', () => {
  it('can be created', () => {
    const stack = new Stack();
    expect(stack).toBeTruthy();
  });

  it('should be empty at the start', () => {
    const stack = new Stack();
    const actual = stack.isEmpty();
    const expected = true;
    expect(actual).toEqual(expected);
  });

  it('should NOT be empty when not empty', () => {
    const stack = new Stack();
    stack.push('apple');
    const actual = stack.isEmpty();
    const expected = false;
    expect(actual).toEqual(expected);
  });

  it('should add value to top', ()=> {
    const stack = new Stack();
    stack.push('apple');
    const actual = stack.peek();
    const expected = 'apple';
    expect(actual).toEqual(expected);
  });

  it('should raise exception when peeking empty', ()=> {
    const stack = new Stack();
    expect(() => stack.peek()).toThrow('Stack is empty, silly');
  });

  it('should should return and remove the top value in the stack', ()=> {
    const stack = new Stack();
    stack.push('apple');
    stack.push('banana');
    stack.push('cherry');
    let actual = stack.pop();
    expect(actual).toEqual('cherry');
  });

  it('should should return exception when the stack is empty', ()=> {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow('Stack is empty, silly');
  });

  it('should maintain the correct order of elements (LIFO)', () => {
    const stack = new Stack();
    stack.push('apple');
    stack.push('banana');
    stack.push('cherry');
    expect(stack.pop()).toEqual('cherry');
    expect(stack.pop()).toEqual('banana');
    expect(stack.pop()).toEqual('apple');
  });
});
