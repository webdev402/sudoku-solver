export class Cell {
  possibleValues: number[];

  constructor(
    private readonly x: number,
    private readonly y: number,
    private value: number = 0
  ) {}

  public isFound(): boolean {
    return this.value > 0;
  }

  public toString(): string {
    return this.value ? '' + this.value : ' ';
  }
}
