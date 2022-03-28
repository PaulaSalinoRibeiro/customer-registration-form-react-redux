import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <>
        <h1>Home page</h1>
        <Link to='/login'>Login</Link>
      </>
    )
  }
}

export default Home;