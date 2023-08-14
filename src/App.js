// eslint-disable-next-line

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Quotes from './components/Quotes';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quotes />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
