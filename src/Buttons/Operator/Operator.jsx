import './Operator.css';

function Operator({total, setTotal, operator}) {
  return <button className="SquareButton">{operator}</button>;
}

export default Operator;
