import './ButtonContainer.css';
import Operand from './Operand/Operand.jsx';

function ButtonContainer({total, setTotal}) {
  return (
    <div className="ButtonContainer">
      <Operand total={total} setTotal={setTotal} />
    </div>
  );
}

export default ButtonContainer;
