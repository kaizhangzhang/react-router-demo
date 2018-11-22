import React, { Component } from 'react';
import './App.css';

class User extends Component {
  render() {
    const {userId} = this.props.match.params;
    console.log(this.props)
    return (
      <div>
         userid: {userId}
      </div>
    );
  }
}

export default User;
