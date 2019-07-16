import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './_reducers';

import PageLayout from './components/Layout/PageLayout';

import Home from './routes/Home';

const store = createStore(rootReducer);

// Logged in state and validation at the highest level so the user would be kicked back to login from here.
// Additionally, pass the logged in state down to PageLayout and hide the navigation options if not logged in.

function App() {
  return (
    <Provider store={store}>
      <Router>
        <PageLayout>
          <Route exact path="/" component={Home} />
        </PageLayout>
      </Router>
    </Provider>
  );
}

export default App;
