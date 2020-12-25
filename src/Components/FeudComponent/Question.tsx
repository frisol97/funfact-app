import React, { useState } from "react";

interface Props {
  question: string;
  firstAlt: string;
  secondAlt: string;
  thirdAlt: string;
  fourthAlt: string;
}

export function Question({
  question,
  firstAlt,
  secondAlt,
  thirdAlt,
  fourthAlt
}: Props) {
  const [isActive, setIsActive] = useState(true);
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(true);
  const [isActive3, setIsActive3] = useState(true);

  function toggle() {
    setIsActive(!isActive);
  }
  function toggle1() {
    setIsActive1(!isActive1);
  }
  function toggle2() {
    setIsActive2(!isActive2);
  }
  function toggle3() {
    setIsActive3(!isActive3);
  }

  function NullStill() {
    setIsActive(true);
    setIsActive1(true);
    setIsActive2(true);
    setIsActive3(true);
  }

  return (
    <div className="main">
      <h2 className="question">{question}</h2>

      <div className="outside-border">
        <div className="inside-border">
          <div className="wrapper">
            <div className="alt-wrapper" onClick={() => toggle()}>
              {isActive ? (
                <span className="alternativ">1</span>
              ) : (
                <span className="answer">{firstAlt}</span>
              )}
            </div>

            <div className="alt-wrapper" onClick={() => toggle1()}>
              {isActive1 ? (
                <span className="alternativ">2</span>
              ) : (
                <span className="answer">{secondAlt}</span>
              )}
            </div>

            <div className="alt-wrapper" onClick={() => toggle2()}>
              {isActive2 ? (
                <span className="alternativ">3</span>
              ) : (
                <span className="answer">{thirdAlt}</span>
              )}
            </div>

            <div className="alt-wrapper" onClick={() => toggle3()}>
              {isActive3 ? (
                <span className="alternativ">4</span>
              ) : (
                <span className="answer">{fourthAlt}</span>
              )}
            </div>
            <button onClick={() => NullStill()}>Nullstill</button>
          </div>
        </div>
      </div>
    </div>
  );
}
