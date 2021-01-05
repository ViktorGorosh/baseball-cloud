import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";
import {Header} from "views/components/Header";
import {Footer} from "views/components/Footer";
import {Login} from "views/screens/Login"
import {Registration} from "views/screens/Registration";
import styles from './App.module.scss';

function App() {
  return (
    <Router>
      <div className={styles.main}>
        <Header />
        <div className={styles.mainContent}>
          <Switch>
            <Route path="/" exact>
              <Redirect to='login' exact/>
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/registration" exact>
              <Registration />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/users" exact>
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
