import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '../../components/Button';
import {DynTextBox} from './dyntextbox';
import Card from '../../components/Card';
import axios from 'axios';

export const ResultPage = props => {
  const [result, updateResult] = useState(props.location.state.result.data);

  const handleOnEval = (data : IEvalData) => {
    let [cost, p] = data.expr.split(',');

    axios.get('http://localhost:8000/api/eval/', {
      params: {
        op: "output_level",
        cost: cost,
        p: p
      }
    }).then(function(response) {
      updateResult(response.data.data);
    }).catch(function(err) {
      console.log(err, data);
    });
  }

  return (<header className="App-header">
    {
      (result && (<Fragment>
        <div className="descriptor">
          <h1>Results</h1>
        </div>
        <DynTextBox initVal={props.location.state.qstr} onChange={handleOnEval}/>
        {
          result.map((cardData, idx) => {
            return <Card model={cardData}/>
          })
        }</Fragment>)) || (<div class="descriptor">
        <h1>Uh Oh! Something happened!</h1>
        <p>Please edit equation again
        </p>
      </div>)
    }
    <Link to='/'>
      <Button>Go Back</Button>
    </Link>
  </header>);
}
