import React from 'react';
import {useHistory} from "react-router-dom";
import {ExprForm, IEvalData} from './form';
import axios from 'axios';

export const HomePage = () => {
  const history = useHistory();

  const handleOnEval = (data : IEvalData) => {
    axios.get('http://ravigitte.pythonanywhere.com/solve/', {
      params: {
        exp: data.expr
      }
    }).then(function(response) {
      history.push("/result", {result: response.data});
    }).catch(function(err) {
      console.log(data);
    });
  }

  return (<header className="App-header">
    <div className="descriptor">
      <h1>Math</h1>
      <p>A frontend demo for<br/>
        <a href="https://github.com/ravigitte/math">https://github.com/ravigitte/math</a>
      </p>
    </div>
    <ExprForm onEval={handleOnEval}/>
  </header>);
}
