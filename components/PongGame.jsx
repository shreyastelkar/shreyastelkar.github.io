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
  //const inputs = ["w", "a", "s", "d"];

  useEffect(() => {
    if (start) {
      window.addEventListener("keypress", (e) => {
        console.log(e.key);
        if (e.key == "d") {
          setY1((y1) => y1 + 10);
        } else if (e.key == "w") {
          setY1((y1) => y1 - 10);
        }
      });
    }
  }, [start]);

  return (
    <div class="center">
      <Canvas width="600" height="500" x1={x1} y1={y1} />
    </div>
  );
};

const Canvas = (props) => {
  const { x1, y1, ...rest } = props;
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 600, 500);
    ctx.fillRect(x1, y1, 50, 100);
  }, [y1]);
  return <canvas className="border: solid" ref={ref} {...rest} />;
};
