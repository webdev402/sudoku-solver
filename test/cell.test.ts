import { suite, test } from 'mocha';
import { assert } from 'chai';
import { Cell } from '../src/cell';

suite('Testing Cell class', () => {
  test('check isFound method', () => {
    let cell = new Cell(0, 0);
    assert.isFalse(cell.isFound());

    cell = new Cell(0, 0, 1);
    assert.isTrue(cell.isFound());
  });

  test('check toString method', () => {
    let cell = new Cell(0, 0);
    assert.equal(`${cell}`, ' ');

    cell = new Cell(0, 0, 1);
    assert.equal(`${cell}`, '1');
  });
});
