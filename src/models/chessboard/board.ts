import { Color } from "./color";
import { Piece, PieceType } from "./piece";
import { Position } from "./position";

export class Board {
  public positions: Position[];

  constructor() {
    this.positions = [];

    let columns = ["a", "b", "c", "d", "e", "f", "g", "h"];
    for (let row = 1; row <= 8; row++) {
      columns.forEach((column) => {
        if (row == 2) {
          this.positions.push(
            new Position(row, column, new Piece(PieceType.Pawn, Color.Light))
          );
        } else if (row == 7) {
          this.positions.push(
            new Position(row, column, new Piece(PieceType.Pawn, Color.Dark))
          );
        } else if (row == 8 && (column == "a" || column == "h")) {
          this.positions.push(
            new Position(row, column, new Piece(PieceType.Rook, Color.Dark))
          );
        } else if (row == 1 && (column == "a" || column == "h")) {
          this.positions.push(
            new Position(row, column, new Piece(PieceType.Rook, Color.Light))
          );
        } else if (row == 8 && (column == "b" || column == "g")) {
          this.positions.push(
            new Position(row, column, new Piece(PieceType.Knight, Color.Dark))
          );
        } else if (row == 1 && (column == "b" || column == "g")) {
          this.positions.push(
            new Position(row, column, new Piece(PieceType.Knight, Color.Light))
          );
        } else if (row == 1 && (column == "c" || column == "f")) {
          this.positions.push(
            new Position(row, column, new Piece(PieceType.Bishop, Color.Light))
          );
        } else if (row == 8 && (column == "c" || column == "f")) {
          this.positions.push(
            new Position(row, column, new Piece(PieceType.Bishop, Color.Dark))
          );
        } else if (row == 1 && column == "d") {
          this.positions.push(
            new Position(row, column, new Piece(PieceType.King, Color.Light))
          );
        } else if (row == 8 && column == "d") {
          this.positions.push(
            new Position(row, column, new Piece(PieceType.King, Color.Dark))
          );
        } else if (row == 1 && column == "e") {
          this.positions.push(
            new Position(row, column, new Piece(PieceType.Queen, Color.Light))
          );
        } else if (row == 8 && column == "e") {
          this.positions.push(
            new Position(row, column, new Piece(PieceType.Queen, Color.Dark))
          );
        } else {
          this.positions.push(new Position(row, column));
        }
      });
    }
  }
}
