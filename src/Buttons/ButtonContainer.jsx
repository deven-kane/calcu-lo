import './ButtonContainer.css';
import Operand from './Operand/Operand';
import Operator from './Operator/Operator';

const OPERATORS = ['+', '-', '/', '*', '.', '='];
const buttonLayout = ['7',  '8',  '9',  '+',  '4',  '5',  '6',  '-',  '1',  '2',  '3',  '/',  '.',  '0',  '=',  '*'];
function isOperator(currElement) {
  return OPERATORS.includes(currElement);
}

function ButtonContainer({total, setTotal}) {
  return (
    <div className="ButtonContainer">
      {buttonLayout.map((val) => {
        return isOperator(val) ? (
          <Operator operator={val} />
        ) : (
          <Operand total={total} setTotal={setTotal} operand={val} />
        );
      })}
    </div>
  );
}

export default ButtonContainer;
