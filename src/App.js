import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './_reducers';

import PageLayout from './components/Layout/PageLayout';

import Home from './routes/Home';
import Cart from './routes/Cart';
import Merch from './routes/Merch';
import About from './routes/About';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <PageLayout>
          <Route exact path="/" component={Home} />
          <Route exact path="/merch/:item" component={Merch} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/about" component={About} />
        </PageLayout>
      </Router>
    </Provider>
  );
}

export default App;
