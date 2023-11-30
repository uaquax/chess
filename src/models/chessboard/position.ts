import { Color } from "./color";
import type { Piece } from "./piece";

export class Position {
  public row: number;
  public column: string;
  public color: Color;
  public piece?: Piece;

  constructor(row: number, column: string, piece?: Piece) {
    this.row = row;
    this.column = column;
    this.color = this.calculateColor();
    this.piece = piece;
  }

  private calculateColor(): Color {
    const columnIndex = this.column.charCodeAt(0) - "a".charCodeAt(0) + 1;
    return (this.row + columnIndex) % 2 === 0 ? Color.Light : Color.Dark;
  }
}
