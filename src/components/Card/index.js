import React from 'react';
import PropTypes from 'prop-types';
import MathJax from 'mathjax3-react';
import Wrapper from './Wrapper';

import './card.css';


function Card(props) {
  return(
    <Wrapper>
      <div className="Card">
      {
        props.model.map((messageObj) => {
          if(messageObj.type == "PureMath") {
            return(
              <MathJax.Provider>
                <MathJax.Html html={`$$` + messageObj.message + `$$`}/>
              </MathJax.Provider>
            );
          } else if(messageObj.type == "MathMsg") {
            return(
              <MathJax.Provider>
                <MathJax.Html html={`$$` + messageObj.message.replace(/\"/g, "$$$") + `$$`}/>
              </MathJax.Provider>
            );
          } else if(messageObj.type == "TipMsg") {
            return(
              <p>{messageObj.message}</p>
            );
          }
        })
      }
      </div>
    </Wrapper>
    );
}

Card.propTypes = {
  model: PropTypes.string,
};

export default Card;
