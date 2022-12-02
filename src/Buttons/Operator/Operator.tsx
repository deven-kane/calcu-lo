// import './Operator.css';

export type OperatorChar = '+' | '-' | '*' | '/' | '=' | '.'
export const OPERATORS: OperatorChar[] = ['+', '-', '/', '*', '.', '='];

function Operator({total, setTotal, operator}: {total: number, setTotal: (arg: number) => void, operator: OperatorChar}) {
  return <button className="SquareButton">{operator}</button>;
}

export default Operator;
