import React from 'react';
import {Header} from "./views/components/Header";
import './App.css';
import {Footer} from "./views/components/Footer";

function App() {
  return (
      <div className="main">
        <Header />
        <div className="mainContent">{}</div>
        <Footer />
      </div>
  );
}

export default App;
