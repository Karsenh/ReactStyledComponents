import React from 'react';
import GlobalStyle from './globalStyles';
import { Navbar } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <GlobalStyle />
        <Navbar />

        <Switch>{/* <Route to='/' exact component={} /> */}</Switch>
      </Router>
    </div>
  );
}

export default App;
