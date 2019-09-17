
const sinon = require('sinon');
const assert = require('assert');
const combineRefs = require('./');

describe('combineRefs()', function () {
  it('should call a function with the ref arg', function () {
    const cb = sinon.fake();
    const refCallback = combineRefs(
      cb
    );

    refCallback('element');
    sinon.assert.calledWith(cb, 'element');
  });

  it('should set .current property on an object', function () {
    const obj = { current: null };
    const refCallback = combineRefs(
      obj
    );

    refCallback('element');
    assert.deepEqual(obj, { current: 'element' }, 'Expected .current property to be updated.');
  });

  it('should update multiples refs at once', function () {
    const fn1 = sinon.fake();
    const fn2 = sinon.fake();
    const obj1 = { current: null };
    const obj2 = { current: null };

    const refCallback = combineRefs(
      fn1,
      obj1,
      fn2,
      obj2,
    );

    refCallback('element');
    sinon.assert.calledWith(fn1, 'element');
    sinon.assert.calledWith(fn2, 'element');
    assert.deepEqual(obj1, { current: 'element' }, 'Expected .current property to be updated.');
    assert.deepEqual(obj2, { current: 'element' }, 'Expected .current property to be updated.');
  });
});
