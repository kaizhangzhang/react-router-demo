import React, { Component } from 'react';

class Topic extends Component {
  render() {
    const {id} = this.props.match.params;
    return (
      <div>
         topicId =  {id}
      </div>
    );
  }
}

export default Topic;
