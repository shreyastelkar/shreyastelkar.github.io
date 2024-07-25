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
      <div className="text-center text-white text-xl mt-8">
        <button className="text-[#cc0000]" class="btn" onClick={handleClick}>
          Start Game
        </button>
        <h1> Time Left: {time} sec</h1>
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
  const [y1, setY1] = useState(200);
  const [x2, setX2] = useState(565);
  const [y2, setY2] = useState(200);
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
        return y2 < 400 ? y2 + delta : y2;
      });
    }
    if (keys["i"]) {
      setY2((y2) => {
        return y2 > 0 ? y2 - delta : y2;
      });
    }
    if (keys["s"]) {
      setY1((y1) => {
        return y1 < 400 ? y1 + delta : y1;
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
  const [ballX, setBallX] = useState(300);
  const [ballY, setBallY] = useState(250);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const ballYRef = useRef(ballY);
  const direction = useRef(-1);
  const angle = useRef(1);
  const canChangeDirectionRef = useRef(true);
  const pastPaddleRef = useRef(false);
  const ballWidth = 25;
  const paddleWidth = 30;
  const paddleHeight = 100;
  const velocity = 20;
  const canvasHeight = 500;
  const canvasWidth = 600;

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
          // if (x < x1Ref.current + paddleWidth - 2) {
          //   pastPaddleRef.current = true;
          // }
          if (
            x > x1Ref.current + paddleWidth ||
            x < x2Ref.current - ballWidth

            //&&|
            //            !pastPaddleRef.current
          ) {
            canChangeDirectionRef.current = true;
          }
          if (canChangeDirectionRef.current) {
            let isCollision = false;
            if (
              x <= x1Ref.current + paddleWidth &&
              x > x1Ref.current &&
              collisionCheck(y1Ref.current)
            ) {
              isCollision = true;
              x = x1Ref.current + paddleWidth + 10;
            } else if (
              x >= x2Ref.current - ballWidth &&
              collisionCheck(y2Ref.current)
            ) {
              isCollision = true;
              x = x2Ref.current - ballWidth - 10;
            }
            if (isCollision) {
              direction.current = direction.current * -1;
              canChangeDirectionRef.current = false;
              pastPaddleRef.current = true;
            }
          }
          if (x <= 0 && !pastPaddleRef.current) {
            setPlayer2Score((score) => score + 1);
            resetRound();
          } else if (x >= canvasWidth && !pastPaddleRef.current) {
            setPlayer1Score((score) => score + 1);
            resetRound();
          }

          pastPaddleRef.current = false;
          return x + direction.current * velocity;
        });

        setBallY((y) => {
          if (y >= canvasHeight || y <= 0) {
            angle.current = angle.current * -1;
          }
          return y + angle.current * 10;
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
    setBallX(300);
    setBallY(250); //can do middle of height or anywhere in height range for random
  };

  const resetGame = () => {
    clearInterval(intervalBallRef.current);
    clearInterval(intervalTimeRef.current);
    setTime(gameTime);
    setStart(false);
    setPlayer1Score(0);
    setPlayer2Score(0);
    resetRound();
  };

  return (
    <div>
      <button className="text-[#cc0000]" class="btn" onClick={resetGame}>
        Reset
      </button>

      <h1> Player1 Score: {player1Score}</h1>
      <h1> Player2 Score: {player2Score}</h1>

      <h1> Player1 Controls: W - up , S - down </h1>
      <h1> Player2 Controls: I - up , K - down </h1>
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
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 500);
    ctx.stroke();
  }, [y1, y2, ballX, ballY]);

  return <canvas ref={ref} {...rest} />;
};
