import React from 'react';
import {PropTypes} from 'prop-types';
import strShorten from 'str_shorten';

class DescriptionBox extends React.Component {

  render() {
    let {content, maxChars} = this.props;

    return <this.props.component>{strShorten(content, maxChars)}</this.props.component>;
  }
}

DescriptionBox.propTypes = {
  component: PropTypes.func,
  content: PropTypes.string,
  maxChars: PropTypes.number
};

DescriptionBox.defaultProps = {
  component: function(props) {
    return (
      <div>{props.children}</div>
    );
  },
  content: '',
  maxChars: 300
};

export default DescriptionBox;
