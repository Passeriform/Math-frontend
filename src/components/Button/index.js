import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

import './button.css';


function Button(props) {
    return(
      <Wrapper>
        <button onClick={props.handleRoute}>
          {Children.toArray(props.children)}
        </button>
      </Wrapper>
    );
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
