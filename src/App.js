import React from 'react';
import './App.css';

import PageLayout from './components/PageLayout';

// Convert into a class component in order to store a state for the body's className (push contents to the right when the sidebar opens)

function App() {
  return (
    <PageLayout resizeBody={ function resizeBody(){ return; }}>
      
    </PageLayout>
  );
}

export default App;
