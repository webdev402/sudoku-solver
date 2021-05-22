class Sudoku {
  grid: Grid;

  constructor(n: number, m: number) {
    this.grid = new Grid(n, m);
  }

  toString() {
    return this.grid.toString();
  }
}

class Grid {
  grid: Cell[][];
  m: number;
  n: number;

  constructor(n: number, m: number) {
    this.n = n;
    this.m = m;
    this.grid = new Array(n).fill(0).map((_, x) => {
      return new Array(m).fill(0).map((_, y) => new Cell(x, y));
    });
  }

  toString() {
    const field: string[] = [];
    const separator = new Array(this.m + 1).fill('+').join('-');
    field.push(separator);
    this.grid.forEach((e) => {
      field.push('|' + e.map((e) => '' + e).join('|') + '|');
      field.push(separator);
    });
    return field.join('\n');
  }
}

class Cell {
  possibleValues: number[];
  isFound: boolean = false;
  x: number;
  y: number;
  value: number;

  constructor(x: number, y: number, value: number = 0) {
    this.x = x;
    this.y = y;
    this.value = value || (Math.random() * 10) | 0;
  }

  toString() {
    return this.value || ' ';
  }
}

const sudoku = new Sudoku(5, 8);
console.log(sudoku.toString());
