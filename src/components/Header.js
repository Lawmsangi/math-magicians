import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

export default function Header() {
  return (
    <div className="header">
      <h1>Math Magicians</h1>
      <nav>
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/calculator">Calculator</Link>
        <Link className="links" to="/quote">Quote</Link>
      </nav>
    </div>
  );
}
