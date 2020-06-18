import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };
  /*
    async componentDidMount() {
      this.setState({ loading: true });
      const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({ loading: false, users: res.data })
    }
    */
  //search user
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ loading: false, users: res.data.items })
    if (this.state.users.length > 0)
      this.setState({ alert: null })
  }
  //clear search
  clearUsers = () => this.setState({ users: [], loading: false, })
  //set Alert
  setAlert = (mes, type) => {
    this.setState({ alert: { mes, type } })
    //setTimeout(() => this.setState({ alert: null }), 3000) 
    // another solution to hide flash message
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}
          >
          </Search>  {/* prop up */}
          <User loading={this.state.loading} users={this.state.users} />
        </div >
      </div >


    );
  }
}

export default App;
