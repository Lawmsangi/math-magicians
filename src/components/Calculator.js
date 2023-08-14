import React from 'react';
import Buttons from './Buttons';
import '../css/Buttons.css';
import '../css/Calculator.css';

export default function Calculator() {
  return (
    <div className="calculator">
      <h2>Let&apos;s do some math!</h2>
      <Buttons />
    </div>

  );
}
