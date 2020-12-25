import React from "react";
import { FeudComponent, Teams } from "../Components/FeudComponent/";
import "./FamilyFeud.scss";

export function FamilyFeud() {
  return (
    <div className="App">
      <span className="title-circle">
        <h1 className="title">Family Feud</h1>
      </span>
      <p className="p">Gjett hva som er rett!</p>
      <Teams />
      <FeudComponent />
    </div>
  );
}
