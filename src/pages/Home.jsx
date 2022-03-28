import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <>
        <h1>Home page</h1>
        <nav>
          <ul>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </nav>
      </>
    )
  }
}

export default Home;