import React from 'react';
import PropTypes from 'prop-types';
import MathJax from 'mathjax3-react';
import parse, {domToReact} from 'html-react-parser';
import Wrapper from './Wrapper';

import './card.css';


function Card(props) {
  const options = {
    replace: ({ attribs, children }) => {
      if (attribs && attribs.type === 'math/tex; mode=display') {
        console.log(children)
          return <MathJax.Provider>
            <MathJax.Html html={`$$` + children[0].data + `$$`}/>
          </MathJax.Provider>
      }
    }
  };
  // let eq_map = (striptags(props.model.output, "script",)).split(/\n+/);

  return(
    <Wrapper>
      <div className="Card">
      {
        parse(props.model.output||"<Fragment/>", options)
      }
      </div>
    </Wrapper>
    );
}

Card.propTypes = {
  model: PropTypes.string,
};

export default Card;
