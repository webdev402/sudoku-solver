import { suite, test } from 'mocha';
import { assert } from 'chai';
import { validate, FIELD_SIZE } from '../src/validator';
import {
  InitValueItemSizeError,
  InitValueItemTypeError,
  InitValueItemValueError,
  InitValueSizeError,
  InitValueTypeError,
} from '../src/exceptions';

suite('Testing validator', () => {
  test('initial value is an array', () => {
    assert.throw(() => validate(undefined), InitValueTypeError);
    assert.throw(() => validate(null), InitValueTypeError);
    assert.doesNotThrow(() => validate([]), InitValueTypeError);
  });

  test('initial value array has 9 items', () => {
    let arr = new Array(8);
    assert.throw(() => validate(arr), InitValueSizeError);
    arr = new Array(FIELD_SIZE);
    assert.doesNotThrow(() => validate(arr), InitValueSizeError);
  });

  test('initial value array has array subitems', () => {
    const arr = new Array(FIELD_SIZE).fill([]);
    assert.doesNotThrow(() => validate(arr), InitValueItemTypeError);
    arr[6] = '';
    assert.throw(() => validate(arr), InitValueItemTypeError);
  });

  test('initial value subitems has 9 elements', () => {
    let arr = new Array(FIELD_SIZE)
      .fill(0)
      .map(() => new Array(FIELD_SIZE).fill(null));
    assert.doesNotThrow(() => validate(arr), InitValueItemSizeError);

    arr[4] = new Array(8).fill(null);
    assert.throw(() => validate(arr), InitValueItemSizeError);
  });

  test('initial value subitems has correct number elements', () => {
    let arr = new Array(FIELD_SIZE)
      .fill(0)
      .map(() => new Array(FIELD_SIZE).fill((Math.random() * 10) | 0));
    assert.doesNotThrow(() => validate(arr), InitValueItemValueError);

    arr[4][5] = 3.4;
    assert.throw(() => validate(arr), InitValueItemValueError);

    arr[7][2] = null;
    assert.throw(() => validate(arr), InitValueItemValueError);

    arr[7][2] = -1;
    assert.throw(() => validate(arr), InitValueItemValueError);
  });
});
