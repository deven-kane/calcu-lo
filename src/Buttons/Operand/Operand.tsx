import './Operand.css';
import { Button } from '../ButtonContainer'

export type OperandChar = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'


function Operand({total, setTotal, operand}: {total: number, setTotal: (arg: number) => void, operand: Button}) {
  function handleClick() {
    setTotal(total);
  }

  return (
    <button onClick={handleClick} className="SquareButton">
      {operand}
    </button>
  );
}

export default Operand;
