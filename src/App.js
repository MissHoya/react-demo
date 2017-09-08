import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/share">1.零基础打卡页面</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
