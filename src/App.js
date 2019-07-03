import React from 'react';
import './App.css';

import PageLayout from './components/PageLayout';

// Redux Store and BrowserRouter need to be implemented here

// Logged in state and validation at the highest level so the user would be kicked back to login from here.
// Additionally, pass the logged in state down to PageLayout and hide the navigation options if not logged in.

function App() {
  return (
    <PageLayout>
      {/* Render the particular routes as child components passed to PageLayout */}
    </PageLayout>
  );
}

export default App;
