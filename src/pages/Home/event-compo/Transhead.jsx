import React from "react";
import "./Event.css";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Comedy Knight","ComicVerse", "Event After Hours", "Open Mic Night"];

const Trans = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 5000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition
        text={TEXTS[index % TEXTS.length]}
        springConfig={presets.wobbly}
      />
    </h1>
  );
};

export default Trans;
