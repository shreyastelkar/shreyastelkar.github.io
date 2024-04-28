import { useState, useEffect, useRef } from "react";
export const PongGame = () => {
  return (
    <>
      <Timer />
      <Block />
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
    <div className="text-center text-white text-xl mt-8">
      <button className="text-[#cc0000]" class="btn" onClick={handleClick}>
        Start Game
      </button>
      <h1> {showStart()} </h1>
      <h1> Time Left: {time} </h1>
    </div>
  );
};

const Canvas = (props) => {
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    ctx.fillRect(5, 10, 50, 100);
    ctx.fillRect(545, 10, 50, 100);
  }, []);
  return <canvas ref={ref} {...props} />;
};

const Block = () => {
  const [x, setX] = useState(20);
  const [y, setY] = useState(20);

  return (
    <div class="center">
      <Canvas width="600" height="500" />
    </div>
  );
};
