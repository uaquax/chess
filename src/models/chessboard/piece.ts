import type { Color } from "./color";

export enum PieceType {
  Pawn,
  Rook,
  Knight,
  Bishop,
  Queen,
  King,
}

export class Piece {
  public type: PieceType;
  public color: Color;

  constructor(type: PieceType, color: Color) {
    this.type = type;
    this.color = color;
  }
}
