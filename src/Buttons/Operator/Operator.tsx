// import './Operator.css';
import { Button } from '../ButtonContainer'

export type OperatorChar = '+' | '-' | '*' | '/' | '=' | '.'
export const OPERATORS: Button[] = ['+', '-', '/', '*', '.', '='];

function Operator({operator}: {total: number, setTotal: (arg: number) => void, operator: string}) {
  return <button className="SquareButton">{operator}</button>;
}

export default Operator;
