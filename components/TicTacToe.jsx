import { useState } from "react";

export const TicTacToe = () => {
  const style = {
    width: 300,
    height: 300,
    border: "1px solid",
    boxSizing: "content-box",
  };
  const pieces = ["X", "O"];
  const [turn, setTurn] = useState(0);
  const [grid, setGrid] = useState(Array(9).fill(null));
  const clickHandler = (i) => {
    const piece = pieces[turn];
    const newGrid = [...grid];
    newGrid[i] = piece;
    setGrid(newGrid);
    setTurn((turn + 1) % pieces.length);
  };

  const gridJSX = grid.map((value, i) => {
    return <Grid value={value} index={i} clickHandler={clickHandler} />;
  });

  return <div style={style}>{gridJSX}</div>;
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
