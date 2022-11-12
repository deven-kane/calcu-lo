import './Operand.css';

function Operand({total, setTotal, operand}) {
  function handleClick() {
    setTotal(total + 1);
  }

  return (
    <button onClick={handleClick} className="SquareButton">
      {operand}
    </button>
  );
}

export default Operand;
