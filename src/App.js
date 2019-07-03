import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import PageLayout from './components/Layout/PageLayout';

import Login from './routes/Login';
import Home from './routes/Home';

// Redux Store and BrowserRouter need to be implemented here

// Logged in state and validation at the highest level so the user would be kicked back to login from here.
// Additionally, pass the logged in state down to PageLayout and hide the navigation options if not logged in.

function App() {
  return (
    <PageLayout>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </PageLayout>
  );
}

export default App;
