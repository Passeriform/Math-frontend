import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import MathJax from 'mathjax3-react';
import striptags from 'striptags';
import Button from '../../components/Button';

export const ResultPage = props => {
  let result = props.location.state.result;
  console.log(result);
  return (<header className="App-header">
    {
      (result && (<Fragment>
        <div class="descriptor">
          <h1>Results</h1>
          <p>The expression fed was: {result[0].input}
          </p>
        </div>
        {
          result.map((data, idx) => {
            // console.log(cardData.output);
            // return (<div className="Card" dangerouslySetInnerHTML={{
            //     __html: cardData.output || cardData.input
            //   }}/>)

            let eq_map = (striptags(data.output, "script")).split(/\n+/);

            return eq_map.map((equation, eq_idx) => {
              return <MathJax.Provider>
                <MathJax.Html html={`$$` + equation + `$$`}/>
              </MathJax.Provider>
            })
          })

          // <MathJax.Provider>
          //     <MathJax.Html html={`$$`}/>
          //   </MathJax.Provider>

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
