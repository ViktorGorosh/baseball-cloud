import React from 'react';
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Header} from "./views/components/Header";
import {Footer} from "./views/components/Footer";
import {Auth} from "./views/screens/Auth"
import styles from './App.module.scss';

axios.defaults.baseURL = 'https://baseballcloud-back.herokuapp.com';

function App() {
  return (
      <Router>
          <div className={styles.main}>
              <Header />
              <div className={styles.mainContent}>
                  <Switch>
                      <Route path="/login">
                          <Auth />
                      </Route>
                      <Route path="/about">
                          <About />
                      </Route>
                      <Route path="/users">
                          <Users />
                      </Route>
                  </Switch>
              </div>
              <Footer />
          </div>
      </Router>
  );
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default App;
