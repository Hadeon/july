import React, { Component, Suspense } from 'react';
import './Home.css';

const StoreItem = React.lazy(() => import('../components/StoreItem'));

export default class Home extends Component {
  state = {
    count: 10
  }
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', flexFlow: 'row wrap' }}>
        {[...Array(this.state.count)].map((count, index) => (
          <Suspense fallback={<div>...Loading</div>} key={index}>
            <StoreItem/>
          </Suspense>
        ))}
      </div>
    )
  }
}