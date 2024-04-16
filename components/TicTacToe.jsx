import { useState } from "react";

export const TicTacToe = () => {
  const style = {
    width: 300,
    height: 300,
    border: "1px solid",
    boxSizing: "content-box",
  };
  const cols = 3;
  const rows = 3;
  const pieces = ["X", "O"];
  const [turn, setTurn] = useState(0);
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [win, setWin] = useState("in progress");

  const notClicked = (i) => {
    if (pieces.indexOf(grid[i]) < 0) {
      return true;
    }
    return false;
  };

  const gridIndex = (x, y) => {
    return cols * x + y;
  };

  const checkWinHorizontal = (newGrid) => {
    for (let x = 0; x < rows; x += 1) {
      for (let y = 0; y < cols - 2; y += 1) {
        if (
          newGrid[gridIndex(x, y)] == newGrid[gridIndex(x, y + 1)] &&
          newGrid[gridIndex(x, y + 1)] == newGrid[gridIndex(x, y + 2)] &&
          newGrid[gridIndex(x, y)] != null
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const clickHandler = (i) => {
    const piece = pieces[turn];
    const newGrid = [...grid];

    if (notClicked(i)) {
      newGrid[i] = piece;
      setGrid(newGrid);
      setTurn((turn + 1) % pieces.length);
      let isWin = checkWinHorizontal(newGrid);

      if (isWin == true) {
        setWin("You Win");
      }
    }
  };

  const gridJSX = grid.map((value, i) => {
    return <Grid value={value} index={i} clickHandler={clickHandler} />;
  });

  return (
    <>
      <h1> {win} </h1>
      <div style={style}>{gridJSX}</div>
    </>
  );
};

const Grid = ({ value, index, clickHandler }) => {
  const style = {
    width: 100,
    height: 100,
    border: "1px solid blue",
    display: "inline-block",
  };

  const handleClick = () => {
    clickHandler(index);
  };

  return (
    <div style={style} onClick={handleClick}>
      {value || "&nbsp;"}
    </div>
  );
};
