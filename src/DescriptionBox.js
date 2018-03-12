import React from 'react';
import {PropTypes} from 'prop-types';
import strShorten from 'str_shorten';

class DescriptionBox extends React.Component {

  render() {
    let {content, maxChars} = this.props;

    if (this.props.component && content)
      return (
        <this.props.component>
          {strShorten(content, maxChars)}
          {
            this.props.readMore && this.props.readMore.text && this.props.readMore.link &&
            <a href ={`${this.props.readMore.link}`}>{this.props.readMore.text}</a>
          }
        </this.props.component>
      );
    else {
      return null;
    }
  }
}

DescriptionBox.propTypes = {
  component: PropTypes.func,
  content: PropTypes.string,
  maxChars: PropTypes.number,
  readMore: PropTypes.object
};

DescriptionBox.defaultProps = {
  component: function(props) {
    return (
      <div>{props.children}</div>
    );
  },
  readMore: null,
  content: '',
  maxChars: 300
};

export default DescriptionBox;
