import './ButtonContainer.css';
import Operand from './Operand/Operand.jsx';

const OPERANDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function ButtonContainer({total, setTotal}) {
  return (
    <div className="ButtonContainer">
      {OPERANDS.map((operand) => {
        return <Operand total={total} setTotal={setTotal} operand={operand} />;
      })}
    </div>
  );
}

export default ButtonContainer;
