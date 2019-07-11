import React from 'react';
import './../App.css'

const SpeechPlayer = ({pinyin, word}) => (
  <div className="speech-container player">
    <div className="pinyin">{pinyin}</div>
    <div className="character">{word}</div>
    <button className="playSound">Play Sound 🔊</button>
  </div>
);

export default SpeechPlayer;