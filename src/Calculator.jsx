import {useState} from 'react';
import './Calculator.css';
import Display from './Display';
import PanelSpacer from './PanelSpacer';

function Calculator() {
  const [total, setTotal] = useState(0);

  return (
    <div className="Calculator">
      <Display total={total} />
      <PanelSpacer />
    </div>
  );
}

export default Calculator;
