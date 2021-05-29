import { Cell } from './cell';
import { FIELD_SIZE, validate } from './validator';

export class SudokuSolver {
  field: Cell[][];

  constructor(initValues: number[][]) {
    validate(initValues);

    this.field = new Array(FIELD_SIZE).fill(0).map((_, x) => {
      return new Array(FIELD_SIZE)
        .fill(0)
        .map((_, y) => new Cell(x, y, initValues[x][y]));
    });
  }

  public toString(): string {
    const field: string[] = [];
    const separator = new Array(FIELD_SIZE + 1).fill('+').join('-');
    field.push(separator);
    this.field.forEach((e) => {
      field.push('|' + e.join('|') + '|');
      field.push(separator);
    });
    return field.join('\n');
  }
}
