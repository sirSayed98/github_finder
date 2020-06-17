import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import User from './components/users/User'
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({ loading: false, users: res.data })

  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div class="container">
          <User loading={this.state.loading} users={this.state.users} />
        </div>
      </div>


    );
  }
}

export default App;
