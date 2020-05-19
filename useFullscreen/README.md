## 사용 예시

### useFullScreen(callback)은 ref로 선택한 element의 사이즈를 full로 보여주거나 취소할 수 있는 함수로 callback은 true, false를 return 합니다.

```
import React, { useRef } from "react";
import "./styles.css";

const useFullScreen = callback => {
  const element = useRef();
  const runCb = isFull => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      } else {
        return;
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};

export default function App() {
  const onFullS = isFull => {
    console.log(isFull ? "full" : "small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullS);
  return (
    <div className="App"}>
      <div ref={element}>
        <img
          alt="images"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRCjhjZlvtnnCsAoxE7fHf_q1T13X5vNaSJAyLvaJzgn92AyuX&usqp=CAU"
        />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}

```