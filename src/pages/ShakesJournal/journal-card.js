import React, { useState } from "react";
import Journal from "./abc.pdf";
import "./journal-card.css";

function JournalCard() {
  const [isClicked, setIsClicked] = useState(false);

  const clickedFalse = () => {
    setIsClicked(false);
  };

  const effect = () => {
    if (isClicked === false) {
      setIsClicked(true);
      setTimeout(clickedFalse, 4200);
    }
  };

  return (
    <div className="jc-container">
      <div className="jc-heading">ShakesJournal</div>
      <div className="jc-heading-edition">Edition - 1</div>
      <div className="jc-release">
        <hr />
        <div className="jc-release-date">released on 26th Jan 2022</div>
        <hr />
      </div>
      <a href={Journal} download="Journal.pdf">
        <div
          className={isClicked ? "upload loading" : "upload"}
          onClick={effect}
        >
          <div className="path">
            <div className="arrow" />
            <svg>
              <use xlinkHref="#path"></use>
            </svg>
          </div>
          <div className="circle">
            <div className="water">
              <svg>
                <use xlinkHref="#wave"></use>
              </svg>
              <svg>
                <use xlinkHref="#wave"></use>
              </svg>
            </div>
          </div>
        </div>
      </a>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol viewBox="0 0 72 72" id="path">
          <path d="M36,25.12 L36,43.68 C36,53.3185944 31.52,56.7319277 22.56,53.92 C9.12,49.7021084 4,44.5565697 4,36 C4,18.72 18.72,4 36,4 C53.28,4 68,18.72 68,36 C68,53.28 53.28,68 36,68 C18.72,68 4,53.28 4,36 C4,18.72 18.72,4 36,4 C53.28,4 68,18.72 68,36 C68,53.28 53.28,68 36,68 C18.72,68 4,53.28 4,36 C4,18.72 18.72,4 36,4 C43.2533333,4 49.8789797,6.40627283 55.876939,11.2188185 L32.7391444,45.2477592 L23.8653488,38.1626948" />
        </symbol>
        <symbol viewBox="0 0 116 6" id="wave">
          <path d="M58,0 C70.6086957,0 79.3822464,6 87,6 L58,6 L29,6 C36.6177536,6 45.3913043,0 58,0 Z M0,0 C12.6086957,0 21.3822464,6 29,6 L0,6 L0,0 Z M116,0 L116,6 L87,6 C94.6177536,6 103.391304,0 116,0 Z" />
        </symbol>
      </svg>
    </div>
  );
}

export default JournalCard;
