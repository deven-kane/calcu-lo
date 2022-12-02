import './Operand.css';

function Operand({total, setTotal, operand}: {total: number, setTotal: (arg: number) => void, operand: string}) {
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
