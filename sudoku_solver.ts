const FIELD_SIZE = 9;

class SudokuSolver {
  field: Cell[][];

  constructor(initValues: number[][]) {
    const [isValid, message] = this.isValidInitValues(initValues);
    if (!isValid) {
      throw new Error(message);
    }

    this.field = new Array(FIELD_SIZE).fill(0).map((_, x) => {
      return new Array(FIELD_SIZE)
        .fill(0)
        .map((_, y) => new Cell(x, y, initValues[x][y]));
    });
  }

  private isValidInitValues(initValues: number[][]): [boolean, string] {
    if (!Array.isArray(initValues)) {
      return [false, 'Initialize value is not an array'];
    }

    if (initValues.length !== FIELD_SIZE) {
      return [false, 'Initialize value length is not correct'];
    }

    if (!initValues.every((e) => Array.isArray(e))) {
      return [false, 'Initialize value contain incorrect type item'];
    }

    if (!initValues.every((e) => e.length === FIELD_SIZE)) {
      return [false, 'Initialize value item has incorrect length'];
    }

    if (
      !initValues.every((e) =>
        e.every((e) => {
          return Number.isSafeInteger(e) && e >= 0 && e < 10;
        })
      )
    ) {
      return [false, 'Initialize value item contain incorrect value'];
    }

    return [true, ''];
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
