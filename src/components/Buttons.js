import React, { useState } from 'react';
import '../css/Buttons.css';
import calculate from '../logic/calculate';

export default function Buttons() {
  const [state, setState] = useState(() => ({ total: null, next: null, operation: null }));
  function calculation(button) {
    setState((prevState) => calculate(prevState, button));
  }
  return (
    <div className="container">
      <div className="buttons">
        <button type="button" className="result">
          {state.total}
          {' '}
          {state.operation}
          {' '}
          {state.next}
        </button>
        <button type="button" onClick={() => calculation('AC')}>AC</button>
        <button type="button" onClick={() => calculation('+/-')}>+/-</button>
        <button type="button" onClick={() => calculation('%')}>% </button>
        <button type="button" onClick={() => calculation('÷')} className="operator">÷</button>
        <button type="button" onClick={() => calculation('7')}>7</button>
        <button type="button" onClick={() => calculation('8')}>8</button>
        <button type="button" onClick={() => calculation('9')}>9</button>
        <button type="button" onClick={() => calculation('x')} className="operator">x</button>
        <button type="button" onClick={() => calculation('4')}>4</button>
        <button type="button" onClick={() => calculation('5')}>5</button>
        <button type="button" onClick={() => calculation('6')}>6</button>
        <button type="button" onClick={() => calculation('-')} className="operator">-</button>
        <button type="button" onClick={() => calculation('1')}>1</button>
        <button type="button" onClick={() => calculation('2')}>2</button>
        <button type="button" onClick={() => calculation('3')}>3</button>
        <button type="button" onClick={() => calculation('+')} className="operator">+</button>
        <button type="button" onClick={() => calculation('0')} className="zero">0</button>
        <button type="button" onClick={() => calculation('.')}>. </button>
        <button type="button" onClick={() => calculation('=')} className="operator">=</button>
      </div>
    </div>
  );
}
