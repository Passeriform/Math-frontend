import React from 'react';
import {useHistory} from "react-router-dom";
import {ExprForm, IEvalData} from './form';
import axios from 'axios';

export const HomePage = () => {
  const history = useHistory();

  const handleOnEval = (data : IEvalData) => {
    let [cost, p] = data.expr.split(',');
    axios.get('https://mathcalci-backend.herokuapp.com/api/eval/', {
      params: {
        op: "output_level",
        cost: cost,
        p: p
      }
    }).then(function(response) {
      history.push("/result", {qstr: data.expr, result: response.data});
    }).catch(function(err) {
      console.log(err, data);
    });
  }

  const handleOnChange = (data : IEvalData) => {
    console.log("Current expression:", data.expr)
  }

  return (<header className="App-header">
    <div className="descriptor">
      <h1>MathCalci</h1>
      <p>A prototype sequential math problem solver.<br/>
      </p>
    </div>
    <ExprForm onEval={handleOnEval} onChange={handleOnChange}/>
  </header>);
}
