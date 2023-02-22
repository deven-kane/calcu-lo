import './ButtonContainer.css';
import Operand, {  } from './Operand/Operand';
import Operator, { OPERATORS } from './Operator/Operator';

export type OperandChar = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
export type OperatorChar = '+' | '-' | '*' | '/' | '=' | '.'
export type Button = OperatorChar | OperandChar
// prettier-ignore
const buttonLayout: Button[] = ['7',  '8',  '9',  '+',  '4',  '5',  '6',  '-',  '1',  '2',  '3',  '/',  '.',  '0',  '=',  '*'];

function isOperator(button: Button): boolean {
  return OPERATORS.includes(button);
}


function ButtonContainer({total, setTotal}: {total: number, setTotal: (arg: number) => void}) {
  return (
    <div className="ButtonContainer">
      {
        buttonLayout.map((button) => {
          return isOperator(button) ? (
            <Operator total={total} setTotal={setTotal} operator={button} />
          ) : (
            <Operand total={total} setTotal={setTotal} operand={button} />
          );
        })
      }
    </div>
  );
}

export default ButtonContainer;
