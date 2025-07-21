import { useState } from "react";

export const TicTacToe = () => {
  const style = {
    border: "1px solid",
    boxSizing: "content-box",
  };
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(3);
  const pieces = ["X", "O"];
  const [turn, setTurn] = useState(0);
  const [grid, setGrid] = useState(Array(rows * cols).fill(null));
  const [win, setWin] = useState("");

  const gridIndex = (x, y) => {
    return cols * x + y;
  };

  const checkWinDirection = (newGrid, direction) => {
    const deltas = {
      horizontal: [0, 1],
      vertical: [1, 0],
      diagRight: [1, 1],
      diagLeft: [1, -1],
    };

    const conditions = {
      horizontal: [rows, cols - 2],
      vertical: [rows - 2, cols],
      diagRight: [rows - 2, cols - 2],
      diagLeft: [rows - 2, 1],
    };

    const isDiagLeft = direction === "diagLeft";
    for (let x = 0; x < conditions[direction][0]; x += 1) {
      for (
        let y = isDiagLeft ? cols - 1 : 0;
        isDiagLeft ? y > 1 : y < conditions[direction][1];
        y = isDiagLeft ? y - 1 : y + 1
      ) {
        let xDelta, yDelta;
        [xDelta, yDelta] = deltas[direction];
        let first = newGrid[gridIndex(x, y)];
        let second = newGrid[gridIndex(x + xDelta, y + yDelta)];
        let third = newGrid[gridIndex(x + 2 * xDelta, y + 2 * yDelta)];

        if (first == second && second == third && first != null) {
          return true;
        }
      }
    }
    return false;
  };
  const checkWin = (newGrid) => {
    return (
      checkWinDirection(newGrid, "horizontal") ||
      checkWinDirection(newGrid, "vertical") ||
      checkWinDirection(newGrid, "diagRight") ||
      checkWinDirection(newGrid, "diagLeft")
    );
  };

  const clickHandler = (i) => {
    const piece = pieces[turn];
    const newGrid = [...grid];

    if (grid[i] == null && win !== "You Win") {
      newGrid[i] = piece;
      setGrid(newGrid);
      setTurn((turn + 1) % pieces.length);
      if (checkWin(newGrid)) {
        setWin(`${piece} Wins!`);
      }
    }
  };

  const gridJSX = grid.map((value, i) => {
    return <Grid value={value} index={i} clickHandler={clickHandler} key={i} />;
  });

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[400px] w-full">
      <h3 className="text-2xl font-bold text-white mb-6">Tic Tac Toe</h3>
      <div className="text-xl font-bold text-white mb-4"> {win} </div>
      <div
        className="mb-4"
        style={{
          ...style,
          width: `${cols * 100}px`,
          height: `${rows * 100}px`,
        }}
      >
        {gridJSX}
      </div>

      {/* <div>
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
      </div> */}
      <button
        className="text-xl text-[#cc0000]"
        onClick={() => {
          setGrid(Array(rows * cols).fill(null));
          setWin("");
        }}
      >
        Reset
      </button>
    </div>
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
