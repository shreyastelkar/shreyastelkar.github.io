import React, { useState } from "react";
const Demos = () => {
  //useState("-");
  const cols = 3;
  const rows = 3;
  const symbols = ["-", "X", "O"];
  const grid = "-".repeat(cols * rows);

  const coordinate_conversion = (x, y, col) => {
    return col * x + y;
  };

  const game = (symbols, player1_turn) => {
    if (player1_turn == true) {
      let current_symbol = symbols[1]; // set player symbol to X
      //set coordinates to X
      //do checks accoringly
    }
  };
  const player1_turn = false;

  // const create_grid = (length) => {
  //     for (i = 0, i < length, i += 1) {

  //     };
  //    };

  return <h1>{coordinate_conversion(1, 1, cols)}</h1>;
};
export default Demos;

// const TileButton = () => {
//   const [mark, setMark] = useState("-");
//   return (
//     <button className="ml-4" type="button" onClick={() => setMark("X")}>
//       {mark}
//     </button>
//   );
// };

// const Demos = () => {
//   //   const reducer = (state, action) => {
//   //       switch (action.type) {

//   //   }
//   // const initialMarks = [
//   //   { id: 1, mark: "X" },
//   //   { id: 2, mark: "O" },
//   // ];
//   // const [marks, dispatch] = useReducer(reducer, initialMarks);

//   // const handleMark = (mark) => {
//   //   dispatch({ type: mark.mark, id: mark.id });
//   // };
//   const [mark, setMark] = useState("-");
//   const cols = 3;
//   const rows = 3;
//   const singleArray = Array.from({ length: cols }, (_, i) => (
//     <button className="ml-4" type="button" onClick={() => setMark("X")} key={i}>
//       {mark}
//     </button>
//   ));

//   return (
//     <div className="ml-24">
//       <h1 className="text-2xl mb-4"> Tic Tac Toe </h1>
//       <div>{singleArray}</div>
//       <table>
//         <tbody>
//           {[...Array(cols)].map((col_num) => (
//             <tr>
//               {[...Array(rows)].map((row_num) => (
//                 <td>
//                   <TileButton />
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <button
//         className="text-[#e70606] flex flex-wrap"
//         type="button"
//         onClick={() => setMark("-")}
//       >
//         Reset
//       </button>
//     </div>
//   );
// };

// export default Demos;
