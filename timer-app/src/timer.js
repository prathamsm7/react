import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [endTimer, setEndTimer] = useState(15);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev == endTimer) {
          clearInterval(id);
          return endTimer;
        }
        return prev + 1;
      });
    }, 1000);

    return () => {
      clearInterval(id);
      console.log("Timer unmounted");
    };
  }, []);

  return (
    <div>
      Timer : {timer}
      <br />
      <em>Timer Will Stop when it Reaches {endTimer}</em>
    </div>
  );
};

export default Timer;
