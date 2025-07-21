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
  const intervalTimeRef = useRef(null);

  useEffect(() => {
    if (start) {
      intervalTimeRef.current = setInterval(() => {
        if (time > 0) {
          setTime((time) => {
            if (time > 0) {
              return time - 1;
            } else {
              clearInterval(intervalTimeRef.current);
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

  return (
    <>
      <h3 className="text-2xl font-bold text-white mb-6 text-center">Pong</h3>
      <div className="text-center text-white text-lg mb-4">
        <button className="text-[#cc0000] font-bold" onClick={handleClick}>
          Start Game
        </button>
        <div className="mt-2">Time Left: {time} sec</div>
      </div>
      <Paddle
        start={start}
        intervalTimeRef={intervalTimeRef}
        time={time}
        setTime={setTime}
        setStart={setStart}
        gameTime={gameTime}
      />
    </>
  );
};

const Paddle = ({ start, intervalTimeRef, setTime, setStart, gameTime }) => {
  const [x1, setX1] = useState(5);
  const [y1, setY1] = useState(125);
  const [x2, setX2] = useState(865);
  const [y2, setY2] = useState(125);
  const delta = 20;

  var keys = {};

  useEffect(() => {
    if (start) {
      window.addEventListener("keydown", handleKeyDown, true);

      window.addEventListener("keyup", handleKeyUp);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [start]);

  const handleKeyDown = (e) => {
    keys[e.key] = true;
    if (keys["w"]) {
      setY1((y1) => {
        return y1 > 0 ? y1 - delta : y1;
      });
    }
    if (keys["k"]) {
      setY2((y2) => {
        return y2 < 250 ? y2 + delta : y2;
      });
    }
    if (keys["i"]) {
      setY2((y2) => {
        return y2 > 0 ? y2 - delta : y2;
      });
    }
    if (keys["s"]) {
      setY1((y1) => {
        return y1 < 250 ? y1 + delta : y1;
      });
    }
  };

  const handleKeyUp = (e) => {
    keys[e.key] = false;
  };

  return (
    <div class="center">
      <Ball
        start={start}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        intervalTimeRef={intervalTimeRef}
        setTime={setTime}
        setStart={setStart}
        gameTime={gameTime}
      />
    </div>
  );
};

const Ball = ({
  start,
  x1,
  y1,
  x2,
  y2,
  intervalTimeRef,
  setTime,
  setStart,
  gameTime,
}) => {
  const [ballX, setBallX] = useState(450);
  const [ballY, setBallY] = useState(175);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const ballYRef = useRef(ballY);
  const direction = useRef(-1);
  const angle = useRef(1);
  const canChangeDirectionRef = useRef(true);
  const pastPaddleRef = useRef(false);
  const scoredRef = useRef(false);
  const ballWidth = 25;
  const paddleWidth = 30;
  const paddleHeight = 100;
  const velocity = 35;
  const canvasHeight = 350;
  const canvasWidth = 900;

  let x1Ref = useRef(x1);
  let x2Ref = useRef(x2);
  let y1Ref = useRef(y1);
  let y2Ref = useRef(y2);
  const intervalBallRef = useRef(null);

  useEffect(() => {
    ballYRef.current = ballY;
  }, [ballY]);

  useEffect(() => {
    y2Ref.current = y2;
  }, [y2]);

  useEffect(() => {
    y1Ref.current = y1;
  }, [y1]);

  useEffect(() => {
    x1Ref.current = x1;
  }, [x1]),
    useEffect(() => {
      x2Ref.current = x2;
    }, [x2]);

  useEffect(() => {
    if (start) {
      intervalBallRef.current = setInterval(() => {
        setBallX((x) => {
          // Check if ball is in the middle area (not near paddles)
          if (
            x > x1Ref.current + paddleWidth + 50 &&
            x < x2Ref.current - ballWidth - 50
          ) {
            canChangeDirectionRef.current = true;
            pastPaddleRef.current = false;
          }

          // Only check for paddle collisions if we can change direction
          if (canChangeDirectionRef.current) {
            let isCollision = false;

            // Left paddle collision
            if (
              x <= x1Ref.current + paddleWidth &&
              x > x1Ref.current - 10 &&
              collisionCheck(y1Ref.current) &&
              direction.current < 0 // Ball moving left
            ) {
              isCollision = true;
              x = x1Ref.current + paddleWidth + 5;
              direction.current = Math.abs(direction.current); // Ensure ball goes right
            }
            // Right paddle collision
            else if (
              x >= x2Ref.current - ballWidth &&
              x < x2Ref.current + 10 &&
              collisionCheck(y2Ref.current) &&
              direction.current > 0 // Ball moving right
            ) {
              isCollision = true;
              x = x2Ref.current - ballWidth - 5;
              direction.current = -Math.abs(direction.current); // Ensure ball goes left
            }

            if (isCollision) {
              canChangeDirectionRef.current = false;
              pastPaddleRef.current = true;
            }
          }

          // Score detection - only if ball has passed paddle area
          if (x <= -ballWidth && !scoredRef.current) {
            setPlayer2Score((score) => score + 1);
            scoredRef.current = true;
            resetRound();
            return x; // Don't continue moving
          } else if (x >= canvasWidth + ballWidth && !scoredRef.current) {
            setPlayer1Score((score) => score + 1);
            scoredRef.current = true;
            resetRound();
            return x; // Don't continue moving
          }

          return x + direction.current * velocity;
        });

        setBallY((y) => {
          if (y >= canvasHeight - ballWidth || y <= 0) {
            angle.current = angle.current * -1;
          }
          return y + angle.current * 8;
        });
      }, 60);
    } else {
      resetGame();
    }
  }, [start]);

  const collisionCheck = (y) => {
    return (
      (ballYRef.current >= y &&
        ballYRef.current + ballWidth <= y + paddleHeight) ||
      (ballYRef.current < y && ballYRef.current + ballWidth > y) ||
      (ballYRef.current <= y + paddleHeight &&
        ballYRef.current + ballWidth > y + paddleHeight)
    );
  };

  const resetRound = () => {
    setBallX(450);
    setBallY(175); //can do middle of height or anywhere in height range for random
    scoredRef.current = false; // Reset scoring flag
    canChangeDirectionRef.current = true; // Reset collision flag
    pastPaddleRef.current = false; // Reset paddle flag
  };

  const resetGame = () => {
    clearInterval(intervalBallRef.current);
    clearInterval(intervalTimeRef.current);
    setTime(gameTime);
    setStart(false);
    setPlayer1Score(0);
    setPlayer2Score(0);
    scoredRef.current = false; // Reset scoring flag
    canChangeDirectionRef.current = true; // Reset collision flag
    pastPaddleRef.current = false; // Reset paddle flag
    resetRound();
  };

  return (
    <div className="text-center w-full flex flex-col items-center">
      <div className="flex justify-center gap-8 mb-4 text-sm text-white">
        <div>Player1 Score: {player1Score}</div>
        <div>Player2 Score: {player2Score}</div>
      </div>

      <div className="flex justify-center gap-8 mb-4 text-xs text-slate-300">
        <div>Player1: W/S</div>
        <div>Player2: I/K</div>
      </div>

      <button className="text-[#cc0000] font-bold mb-4" onClick={resetGame}>
        Reset
      </button>
      <Canvas
        width={canvasWidth}
        height={canvasHeight}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        ballX={ballX}
        ballY={ballY}
        ballWidth={ballWidth}
        paddleHeight={paddleHeight}
        paddleWidth={paddleWidth}
        canvasHeight={canvasHeight}
        canvasWidth={canvasWidth}
      />
    </div>
  );
};

const Canvas = (props) => {
  const {
    x1,
    y1,
    x2,
    y2,
    ballX,
    ballY,
    ballWidth,
    paddleHeight,
    paddleWidth,
    canvasHeight,
    canvasWidth,
    ...rest
  } = props;
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillRect(x1, y1, paddleWidth, paddleHeight);
    ctx.fillRect(x2, y2, paddleWidth, paddleHeight);
    ctx.fillRect(ballX, ballY, ballWidth, ballWidth);

    ctx.setLineDash([8, 5]);
    ctx.beginPath();
    ctx.moveTo(450, 0);
    ctx.lineTo(450, 350);
    ctx.stroke();
  }, [y1, y2, ballX, ballY]);

  return (
    <canvas
      ref={ref}
      {...rest}
      className="mx-auto border border-slate-600 rounded-lg"
    />
  );
};
