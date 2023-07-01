import React from 'react';
import { useState } from 'react';
import History from './history';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {

  const [result, setResult] = useState('');
  const [clearLabel, setClearLabel] = useState('AC');
  const [calculations, setCalculations] = useState([]);


  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
    setClearLabel('C');
  };

  const clear = () => {
    setResult('');
    setClearLabel('AC');
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString()); 
      setCalculations([...calculations, result]);
    } catch (error) {
      setResult('0');
    }
  };
  return (
    <div className="calculator-wrap">
      <div className="calculator">
        <div className="calculator-screen">
          <input type="text" value={result} placeholder="0" />
        </div>
        <div className="calculator-keyboard">
          <ul className="calculator-row-btn">
            <li> <a className="calculator-btn " name="AC" onClick={clear}> {clearLabel} </a></li>
            <li> <a className="calculator-btn " name="+/-" onClick={handleClick}> +/- </a></li>
            <li> <a className="calculator-btn " name="%" onClick={handleClick}> % </a></li>
            <li> <a className="calculator-btn calculator-btn-operator" name="÷" onClick={handleClick}> ÷ </a></li>
          </ul>
          <ul className="calculator-row-btn">
            <li> <a className="calculator-btn " name="7" onClick={handleClick}> 7 </a></li>
            <li> <a className="calculator-btn " name="8" onClick={handleClick}> 8 </a></li>
            <li> <a className="calculator-btn " name="9" onClick={handleClick}> 9 </a></li>
            <li> <a className="calculator-btn calculator-btn-operator" name="*" onClick={handleClick}> * </a></li>
          </ul>
          <ul className="calculator-row-btn">
            <li> <a className="calculator-btn " name="4" onClick={handleClick}> 4 </a></li>
            <li> <a className="calculator-btn " name="5" onClick={handleClick}> 5 </a></li>
            <li> <a className="calculator-btn " name="6" onClick={handleClick}> 6 </a></li>
            <li> <a className="calculator-btn calculator-btn-operator" name="-" onClick={handleClick}> - </a></li>
          </ul>
          <ul className="calculator-row-btn">
            <li> <a className="calculator-btn " name="1" onClick={handleClick}> 1 </a></li>
            <li> <a className="calculator-btn " name="2" onClick={handleClick}> 2 </a></li>
            <li> <a className="calculator-btn " name="3" onClick={handleClick}> 3 </a></li>
            <li> <a className="calculator-btn calculator-btn-operator" name="+" onClick={handleClick}> + </a></li>
          </ul>

          <ul className="calculator-row-btn">
            <li className="calculator-btn-l"><a className="calculator-btn" name="0" onClick={handleClick}> 0 </a></li>
            <li ><a className="calculator-btn" name="," onClick={handleClick}> , </a> </li>
            <li ><a className="calculator-btn calculator-btn-operator" onClick={calculate}> = </a></li>
          </ul>
        </div>
        <div className='btn-history'>
          <Link to="/history">Go to History</Link>
        </div>
      </div>
      <Routes>
        <Route path='/history' element={<History calculations={calculations} />} />
      </Routes>

    </div>

  );


};

export default App;
