import React from 'react';
import strShorten from 'str_shorten';

class DescriptionBox extends React.Component {

  render() {
    return (
      <div>{strShorten(this.props.content, 300)}</div>
    );
  }

}

export default DescriptionBox;
