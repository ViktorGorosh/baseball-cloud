import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Header} from "./views/components/Header";
import {Footer} from "./views/components/Footer";
import './App.css';

function App() {
  return (
      <Router>
          <div>
              <Header />
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
              <Footer />
          </div>
      </Router>
  );
}

function Auth() {
    return <h2>Auth</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default App;
