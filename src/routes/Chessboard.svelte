<script lang="ts">
  import { Board } from "../models/chessboard/board";
  import { Color } from "../models/chessboard/color";

  $: board = new Board();
</script>

<div class="chess-board">
  {#each board.positions.reverse() as position}
    <div class={`tile ${position.color}`}>
      {#if position.piece?.type == 0}
        <div id="icon">
          {#if position.piece?.color == Color.Light}
            <img alt="pawn" src="pieces/light/pawn.png" />
          {/if}
          {#if position.piece?.color == Color.Dark}
            <img alt="pawn" src="pieces/dark/pawn.png" />
          {/if}
        </div>
      {/if}
      {#if position.piece?.type == 1}
        <div id="icon">
          {#if position.piece?.color == Color.Light}
            <img alt="rook" src="pieces/light/rook.png" />
          {/if}
          {#if position.piece?.color == Color.Dark}
            <img alt="rook" src="pieces/dark/rook.png" />
          {/if}
        </div>
      {/if}
      {#if position.piece?.type == 2}
        <div id="icon">
          {#if position.piece?.color == Color.Light}
            <img alt="knight" src="pieces/light/knight.png" />
          {/if}
          {#if position.piece?.color == Color.Dark}
            <img alt="knight" src="pieces/dark/knight.png" />
          {/if}
        </div>
      {/if}
      {#if position.piece?.type == 3}
        <div id="icon">
          {#if position.piece?.color == Color.Light}
            <img alt="bishop" src="pieces/light/bishop.png" />
          {/if}
          {#if position.piece?.color == Color.Dark}
            <img alt="bishop" src="pieces/dark/bishop.png" />
          {/if}
        </div>
      {/if}
      {#if position.piece?.type == 4}
        <div id="icon">
          {#if position.piece?.color == Color.Light}
            <img alt="queen" src="pieces/light/queen.png" />
          {/if}
          {#if position.piece?.color == Color.Dark}
            <img alt="queen" src="pieces/dark/queen.png" />
          {/if}
        </div>
      {/if}
      {#if position.piece?.type == 5}
        <div id="icon">
          {#if position.piece?.color == Color.Light}
            <img alt="king" src="pieces/light/king.png" />
          {/if}
          {#if position.piece?.color == Color.Dark}
            <img alt="king" src="pieces/dark/king.png" />
          {/if}
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .chess-board {
    user-select: none;
    display: grid;
    grid-template-columns: repeat(8, 0fr);
    grid-template-rows: repeat(8, 0fr);
  }

  .tile {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;
  }

  #icon img {
    -webkit-user-drag: none;

    user-select: none;
    height: 60px;
    widows: 60px;
  }

  .tile.dark {
    color: #eee;
    background-color: #b98764;
  }

  .tile.light {
    color: #242424;
    background-color: #efd6b1;
  }
</style>
