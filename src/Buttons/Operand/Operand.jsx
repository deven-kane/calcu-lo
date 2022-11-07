import './Operand.css';

function Operand({total, setTotal}) {
  function handleClick() {
    setTotal(total + 1);
  }

  return (
    <button onClick={handleClick} className="SquareButton">
      1
    </button>
  );
}

export default Operand;
