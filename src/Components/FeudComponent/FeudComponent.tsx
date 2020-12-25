import React, { useState } from "react";
import { Question } from "./Question";
import { StegState } from "./state";

export function FeudComponent() {
  const [neste, setNeste] = useState<StegState>(StegState.STEG1);

  const currentSteg = () => {
    switch (neste) {
      case StegState.STEG1:
        return (
          <Question
            question="Hva er ingrediensene i Moussaka? (test)"
            firstAlt="Potet"
            secondAlt="Tomat"
            thirdAlt="Aubergine"
            fourthAlt="Vann"
          />
        );
      case StegState.STEG2:
        return (
          <Question
            question="Hva er de mest vanligste fobiene?"
            firstAlt="Sosial angst"
            secondAlt="Agorafobi"
            thirdAlt="Klaustrofobi"
            fourthAlt="Hemofobi (blodfobi)"
          />
        );
      case StegState.STEG3:
        return (
          <Question
            question="Nevn noe du IKKE lærte på skolen"
            firstAlt="Hvordan være forelder"
            secondAlt="Manerer"
            thirdAlt="Betale regninger"
            fourthAlt="Husarbeid"
          />
        );
      case StegState.STEG4:
        return (
          <Question
            question="Nevn noe som beveger seg veldig sakte"
            firstAlt="Gamle folk"
            secondAlt="Snegler"
            thirdAlt="Skilpadder"
            fourthAlt="Babyer"
          />
        );
      case StegState.STEG5:
        return (
          <Question
            question="Det viktigste å huske under corona er ____"
            firstAlt="Vaske henda / antibac"
            secondAlt="Holde avstand"
            thirdAlt="Bli hjemme om du er syk"
            fourthAlt="Munnbind der du ikke kan holde avstand"
          />
        );
      case StegState.STEG6:
        return (
          <Question
            question="Jeg ____ hver dag"
            firstAlt="Pusser tenna"
            secondAlt="Snakker"
            thirdAlt="Spiser"
            fourthAlt="Går"
          />
        );
      case StegState.STEG7:
        return (
          <Question
            question="Nevn noe du lukker øynene for å gjøre"
            firstAlt="Sove"
            secondAlt="Nyse"
            thirdAlt="Kysse"
            fourthAlt="Telle ned til gjemsel"
          />
        );
      case StegState.STEG8:
        return (
          <Question
            question="Nevn noe du finner bak sofaputene"
            firstAlt="Penger"
            secondAlt="Snacks"
            thirdAlt="Fjernkontroll"
            fourthAlt="Støv"
          />
        );
      case StegState.STEG9:
        return (
          <Question
            question="Nevn noe du kjøper på finn.no"
            firstAlt="Møbler"
            secondAlt="Bil"
            thirdAlt="Elektronikk"
            fourthAlt="Kjæledyr"
          />
        );
      case StegState.STEG10:
        return (
          <Question
            question="En av verdiene til Fremtind er ___"
            firstAlt="Sammen"
            secondAlt="Modig"
            thirdAlt="Nysgjerrig"
            fourthAlt="Enkelt"
          />
        );
      default:
        return (
          <Question
            question="Hva er ingrediensene i Moussaka? (test)"
            firstAlt="Potet"
            secondAlt="Tomat"
            thirdAlt="Aubergine"
            fourthAlt="Vann"
          />
        );
    }
  };

  return (
    <>
      {currentSteg()}
      <div className="buttons">
        <button
          className="forrige"
          onClick={() => {
            setNeste(neste - 1);
          }}
        >
          Forrige
        </button>
        <button
          className="neste"
          onClick={() => {
            setNeste(neste + 1);
          }}
        >
          Neste
        </button>
      </div>
    </>
  );
}
