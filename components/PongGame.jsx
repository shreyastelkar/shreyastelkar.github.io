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
      <Block1 start={start} />
    </>
  );
};

const Block1 = ({ start }) => {
  const [x1, setX1] = useState(5);
  const [y1, setY1] = useState(200);
  const [x2, setX2] = useState(545);
  const [y2, setY2] = useState(200);

  useEffect(() => {
    if (start) {
      window.addEventListener("keypress", (e) => {
        if (e.key == "s") {
          //canvas height - height of rectangle
          setY1((y1) => {
            return y1 < 400 ? y1 + 10 : y1;
          });
        } else if (e.key == "w") {
          setY1((y1) => {
            return y1 > 0 ? y1 - 10 : y1;
          });
        }
      });
    }
  }, [start]);

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      if (e.key == "k") {
        setY2((y2) => {
          return y2 < 400 ? y2 + 10 : y2;
        });
      } else if (e.key == "i") {
        setY2((y2) => {
          return y2 > 0 ? y2 - 10 : y2;
        });
      }
    });
  }, [start]);

  return (
    <div class="center">
      <Canvas width="600" height="500" x1={x1} y1={y1} x2={x2} y2={y2} />
    </div>
  );
};

const Canvas = (props) => {
  const { x1, y1, x2, y2, ...rest } = props;
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 600, 500);
    ctx.fillRect(x1, y1, 50, 100);
    ctx.fillRect(x2, y2, 50, 100);

    ctx.setLineDash([8, 5]);
    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 500);
    ctx.stroke();
  }, [y1, y2]);

  return <canvas ref={ref} {...rest} />;
};
