import { useState } from "react";

export const TicTacToe = () => {
  const style = {
    width: 400,
    height: 400,
    border: "1px solid",
    boxSizing: "content-box",
  };
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(3);
  const pieces = ["X", "O"];
  const [turn, setTurn] = useState(0);
  const [grid, setGrid] = useState(Array(rows * cols).fill(null));
  const [win, setWin] = useState("in progress");

  const isEmpty = (i) => {
    return grid[i] === null;
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

  const checkWinVertical = (newGrid) => {
    for (let x = 0; x < rows - 2; x += 1) {
      for (let y = 0; y < cols; y += 1) {
        if (
          newGrid[gridIndex(x, y)] == newGrid[gridIndex(x + 1, y)] &&
          newGrid[gridIndex(x + 1, y)] == newGrid[gridIndex(x + 2, y)] &&
          newGrid[gridIndex(x, y)] != null
        ) {
          return true;
        }
      }
    }
    return false;
  };
  const checkWinDiagonalRight = (newGrid) => {
    for (let x = 0; x < rows - 2; x += 1) {
      for (let y = 0; y < cols - 2; y += 1) {
        if (
          newGrid[gridIndex(x, y)] == newGrid[gridIndex(x + 1, y + 1)] &&
          newGrid[gridIndex(x + 1, y + 1)] ==
            newGrid[gridIndex(x + 2, y + 2)] &&
          newGrid[gridIndex(x, y)] != null
        ) {
          return true;
        }
      }
    }
    return false;
  };
  const checkWinDiagonalLeft = (newGrid) => {
    for (let x = 0; x < rows - 2; x += 1) {
      for (let y = cols - 1; y > 1; y -= 1) {
        if (
          newGrid[gridIndex(x, y)] == newGrid[gridIndex(x + 1, y - 1)] &&
          newGrid[gridIndex(x + 1, y - 1)] ==
            newGrid[gridIndex(x + 2, y - 2)] &&
          newGrid[gridIndex(x, y)] != null
        ) {
          return true;
        }
      }
    }
    return false;
  };
  const checkWin = (newGrid) => {
    return (
      checkWinDiagonalLeft(newGrid) ||
      checkWinDiagonalRight(newGrid) ||
      checkWinHorizontal(newGrid) ||
      checkWinVertical(newGrid)
    );
  };

  const clickHandler = (i) => {
    const piece = pieces[turn];
    const newGrid = [...grid];

    if (isEmpty(i) && win !== "You Win") {
      newGrid[i] = piece;
      setGrid(newGrid);
      setTurn((turn + 1) % pieces.length);
      let isWin = checkWin(newGrid);

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
      <div> {win} </div>
      <div
        style={{
          ...style,
          width: `${cols * 100}px`,
          height: `${rows * 100}px`,
        }}
      >
        {gridJSX}
      </div>

      <div>
        <label>
          Number of Columns:
          <input
            value={cols}
            onChange={(e) => {
              setCols(e.target.value);
            }}
          />
        </label>
        <label>
          Number of Rows:
          <input
            value={rows}
            onChange={(e) => {
              setRows(e.target.value);
            }}
          />
        </label>
      </div>
      <button
        onClick={() => {
          setGrid(Array(rows * cols).fill(null));
          setWin("in progress");
        }}
      >
        Reset
      </button>
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
      {value || "-"}
    </div>
  );
};
