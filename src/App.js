import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        
          <Header/>
            <Routes/>
          <Footer/>
       
      </div>
      </Router>
    );
  }
}

export default App;
