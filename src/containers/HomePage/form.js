import React, {FC, ChangeEvent, useState} from "react";
import Button from '../../components/Button';
import './form.css';

export interface IEvalData {
  expr: string;
}
export interface IEvalResult {
  success: boolean;
  message: string;
}

interface IProps {
  onEval: (data : IEvalData) => IEvalResult;
  onChange: (data : IEvalData) => IEvalResult;
}

export const ExprForm: FC<IProps> = props => {
  const [expr, setExpr] = useState("");
  const [exprError, setExprError] = useState("");

  const handleExprChange = (e : ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    setExpr(newValue);
    const exprError = validateExpr(newValue);
    if (exprError === "") {
      props.onChange({expr});
    }
  };

  const validateExpr = (value : string): string => {
    const error = value
      ? ""
      : "You must enter an expression to begin.";
    setExprError(error);
    return error;
  };

  const handleEvaluate = (e : ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const exprError = validateExpr(expr);
    if (exprError === "") {
      props.onEval({expr});
    }
  };

  return (<form noValidate={true} onSubmit={handleEvaluate}>
    <div className="row">
      <input type="text" placeholder="Enter comma separated cost and p..." id="expr" onChange={handleExprChange} value={expr}/>
    </div>

    <div className="row">
      <span className="error">{exprError}</span>
    </div>

    <div className="row">
      <Button>Evaluate</Button>
    </div>
  </form>);
};
