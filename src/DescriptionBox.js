import React from 'react';
import strShorten from 'str_shorten';

class DescriptionBox extends React.Component {

  render() {
    return (
      <div>{strShorten(this.props.content, this.props.maxChars)}</div>
    );
  }
}

export default DescriptionBox;
