import React, { useState, Fragment } from 'react';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/Pages/About'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  //search user
  const searchUsers = async text => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setLoading(false);
    setUsers(res.data.items);
    if (users.length > 0)
      setAlert(null);
  }

  //get single User
  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setLoading(false);
    setUser(res.data);
    if (users.length > 0)
      setAlert(null);
  }
  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100&sort=created&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setLoading(false);
    setRepos(res.data);
    if (users.length > 0)
      setAlert(null);
  }

  //clear search
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  //set Alert
  const showAlert = (mes, type) => {
    setAlert({ mes, type });
    //setTimeout(() => this.setState({ alert: null }), 3000) 
    // another solution to hide flash message
  }


  return (
    <Router>
      <div div className="App" >
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route exact path="/" render={props => (
              <Fragment>
                <Search
                  searchUsers={searchUsers}
                  clearUsers={clearUsers}
                  showClear={users.length > 0 ? true : false}
                  setAlert={showAlert}
                />{/* prop up */}
                <Users loading={loading} users={users} />
              </Fragment>
            )}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/user/:login" render={props => (
              <User
                user={user}
                getUser={getUser}
                getUserRepos={getUserRepos}
                loading={loading}
                repos={repos}
                {...props}
              />
            )}></Route>
          </Switch>

        </div >
      </div >
    </Router >

  );

}

export default App;
