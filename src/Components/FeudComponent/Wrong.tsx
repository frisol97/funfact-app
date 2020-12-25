import React, { MouseEventHandler } from "react";

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  show?: boolean;
}

export function Wrong({ onClick, show }: Props) {
  //const className = show && "--show";
  return (
    <div className="wrong">
      <span className={`xmark`}>X</span>
      <button className="wrong-button" onClick={onClick}>
        <span role="img" aria-label="check">
          ❌
        </span>
      </button>
    </div>
  );
}
