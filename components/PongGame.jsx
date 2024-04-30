import { useState, useEffect, useRef } from "react";
export const PongGame = () => {
  return (
    <>
      <Timer />
    </>
  );
};

const Timer = () => {
  const gameTime = 60;
  const [time, setTime] = useState(gameTime);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        if (time > 0) {
          setTime((time) => {
            if (time > 0) {
              return time - 1;
            } else {
              clearInterval(interval);
              setStart(false);
              return 0;
            }
          });
        }
      }, 1000);
    }
  }, [start]);

  const handleClick = () => {
    if (!start || time === 0) {
      setTime(gameTime);
      setStart(true);
    }
  };

  const showStart = () => {
    if (start) {
      return "Active";
    } else {
      return "Not Active";
    }
  };
  return (
    <>
      <div className="text-center text-white text-xl mt-8">
        <button className="text-[#cc0000]" class="btn" onClick={handleClick}>
          Start Game
        </button>
        <h1> {showStart()} </h1>
        <h1> Time Left: {time} </h1>
      </div>
      <Paddle start={start} />
    </>
  );
};

const Paddle = ({ start }) => {
  const [x1, setX1] = useState(5);
  const [y1, setY1] = useState(200);
  const [x2, setX2] = useState(545);
  const [y2, setY2] = useState(200);

  useEffect(() => {
    if (start) {
      var keys = {};
      window.addEventListener(
        "keydown",
        (e) => {
          keys[e.key] = true;
          if (keys["w"]) {
            setY1((y1) => {
              return y1 > 0 ? y1 - 10 : y1;
            });
          }
          if (keys["k"]) {
            setY2((y2) => {
              return y2 < 400 ? y2 + 10 : y2;
            });
            if (keys["w"]) {
              setY1((y1) => {
                return y1 > 0 ? y1 - 10 : y1;
              });
            }
          }
          if (keys["i"]) {
            setY2((y2) => {
              return y2 > 0 ? y2 - 10 : y2;
            });
          }
          if (keys["s"]) {
            setY1((y1) => {
              return y1 < 400 ? y1 + 10 : y1;
            });
          }
        },
        true,
      );

      window.addEventListener("keyup", (e) => {
        keys[e.key] = false;
      });
    }
  }, [start]);

  return (
    <div class="center">
      <Ball start={start} x1={x1} y1={y1} x2={x2} y2={y2} />
    </div>
  );
};

const Ball = ({ start, x1, y1, x2, y2 }) => {
  const [ballX, setBallX] = useState(300);
  const [ballY, setBallY] = useState(250);
  const ballYRef = useRef(ballY);
  const direction = useRef(-1);
  //  const [canChangeDirection, setCanChangeDirection] = useState(true);
  const canChangeDirectionRef = useRef(true);
  // 4                   (ballY >= y1 && ballY + 25 <= y1 + 100) ||
  //  135                   (ballY > y1 && ballY + 25 > y1 + 100))) ||
  //&& ballY + 25 >= y1
  let y1Ref = useRef(y1);

  useEffect(() => {
    y1Ref.current = y1; // Update ref whenever ballY changes
  }, [y1]);

  useEffect(() => {
    start &&
      setInterval(() => {
        setBallX((x) => {
          if (x > x1 + 50) {
            canChangeDirectionRef.current = true;
          }
          if (canChangeDirectionRef.current) {
            console.log(ballY);
            console.log(y1Ref.current);
            if ((x <= x1 + 50 && ballY < y1Ref.current) || x >= x2 - 25) {
              direction.current = direction.current * -1;
              canChangeDirectionRef.current = false;
            }
          }
          return x + direction.current * 15;
        });
      }, 150);
  }, [start]);

  return (
    <Canvas
      width="600"
      height="500"
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      ballX={ballX}
      ballY={ballY}
    />
  );
};
const Canvas = (props) => {
  const { x1, y1, x2, y2, ballX, ballY, ...rest } = props;
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 600, 500);
    ctx.fillRect(x1, y1, 50, 100);
    ctx.fillRect(x2, y2, 50, 100);
    ctx.fillRect(ballX, ballY, 25, 25);

    ctx.setLineDash([8, 5]);
    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 500);
    ctx.stroke();
  }, [y1, y2, ballX, ballY]);

  return <canvas ref={ref} {...rest} />;
};
