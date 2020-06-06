import React, {FC, ChangeEvent, useState} from "react";
import './dyntextbox.css';

export interface IEvalData {
  expr: string;
}
export interface IEvalResult {
  success: boolean;
  message: string;
}

interface IProps {
  initVal: string;
  onChange: (data : IEvalData) => IEvalResult;
}

export const DynTextBox: FC<IProps> = props => {
  const [expr, setExpr] = useState(props.initVal||"");
  const [exprError, setExprError] = useState("");

  const handleExprChange = (e : ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    setExpr(newValue);
    console.log(newValue);
    const exprError = validateExpr(newValue);
    if (exprError === "") {
      props.onChange({expr: newValue});
    }
  };

  const validateExpr = (value : string): string => {
    const error = value
      ? ""
      : "You must enter an expression to evaluate.";
    setExprError(error);
    return error;
  };

  return (
    <input type="text" placeholder="Enter comma separated cost and p..." id="expr" onChange={handleExprChange} value={expr}/>
  );
};
