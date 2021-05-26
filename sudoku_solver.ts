import { FIELD_SIZE, validate } from './src/validator';

class SudokuSolver {
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

class Cell {
  possibleValues: number[];
  isFound: boolean = false;

  constructor(
    private readonly x: number,
    private readonly y: number,
    private value: number = 0
  ) {}

  public toString(): string {
    return this.value ? '' + this.value : ' ';
  }
}

var puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const sudoku = new SudokuSolver(puzzle);
console.log(`${sudoku}`);
