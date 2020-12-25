import React, { useState } from "react";
import "./Teams.scss";
import { Right } from "./Right";
import { Wrong } from "./Wrong";

export function Teams() {
  const [points, addPoints] = useState(0);
  const [point, removePoints] = useState(0);

  return (
    <div className="teams">
      <div className="teams-wrapper">
        <h2>
          Team{" "}
          <span role="img" aria-label="robot">
            🤖
          </span>
        </h2>
        <p>Poeng: {points}</p>

        <div className="buttons">
          <Right
            onClick={() => {
              addPoints(points + 10);
            }}
          />
          <Wrong
            onClick={() => {
              addPoints(points - 5);
            }}
          />
        </div>
      </div>

      <div className="teams-wrapper">
        <h2>
          Team{" "}
          <span role="img" aria-label="clown">
            🤡
          </span>
        </h2>
        <p>Poeng: {point}</p>
        <div className="buttons">
          <Right
            onClick={() => {
              removePoints(point + 10);
            }}
          />
          <Wrong
            onClick={() => {
              removePoints(point - 5);
            }}
          />
        </div>
      </div>
    </div>
  );
}
