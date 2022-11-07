import {useState} from 'react';
import './Calculator.css';
import Display from './Display';
import PanelSpacer from './PanelSpacer';
import ButtonContainer from './Buttons/ButtonContainer';

function Calculator() {
  const [total, setTotal] = useState(0);

  return (
    <div className="Calculator">
      <Display total={total} />
      <PanelSpacer />
      <ButtonContainer total={total} setTotal={setTotal} />
    </div>
  );
}

export default Calculator;
