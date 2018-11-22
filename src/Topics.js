import React, { Component } from 'react';
import Topic from './Topic';
import { Route, Link } from "react-router-dom";


class Topics extends Component {
  render() {
    const { match } = this.props; 
    console.log('topisc match', match) 
    return (
      <div>
         topicsss ss
         <Link to={`${match.url}/components`}>Components</Link>
         <Route path={`${match.url}/:id`} component={Topic}></Route>
         <Route
            exact
            path={match.path}
            render={() => <h3>Please select a topic.</h3>}
            />
      </div>
    );
  }
}

export default Topics;
