import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Header} from "views/components/Header";
import {Footer} from "views/components/Footer";
import {Login} from "views/screens/Login"
import {Registration} from "views/screens/Registration";
import {Profile} from "./views/screens/Profile";
import {validateToken} from "state/ducks/user";
import styles from './App.module.scss';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(validateToken())
  })

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
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/leaderboard" exact>
              <Leaderboard />
            </Route>
            <Route path="/network" exact>
              <Network />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

function Leaderboard() {
  return <h2>Leaderboard</h2>;
}

function Network() {
  return <h2>Network</h2>;
}

export default App;
