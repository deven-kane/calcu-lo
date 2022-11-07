import {useState} from 'react';
import './Calculator.css';
import Display from './Display';

function Calculator() {
  const [total, setTotal] = useState(0);

  return (
    <div className="Calculator">
      <Display total={total} />
    </div>
  );
}

export default Calculator;
