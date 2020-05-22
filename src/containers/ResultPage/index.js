import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';

export const ResultPage = props => {
  let result = props.location.state.result;
  console.log(result);
  return (<header className="App-header">
    {
      (result && (<Fragment>
        <div className="descriptor">
          <h1>Results</h1>
          <p>The expression fed was: {result[0].input}
          </p>
        </div>
        {
          result.map((cardData, idx) => {
            return <Card model={cardData}/>
          })
        }</Fragment>)) || (<div class="descriptor">
        <h1>Uh Oh! Something happened!</h1>
        <p>Please go back and try the equation again
        </p>
      </div>)
    }
    <Link to='/'>
      <Button>Go Back</Button>
    </Link>
  </header>);
}
