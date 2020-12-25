import React, { MouseEventHandler } from "react";

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  show?: boolean;
}

export function Right({ onClick, show }: Props) {
  //const className = show && "--show";
  return (
    <div className="right">
      <span className={`checkmark`}>V</span>
      <button className="right-button" onClick={onClick}>
        <span role="img" aria-label="check">
          ✅
        </span>
      </button>
    </div>
  );
}
