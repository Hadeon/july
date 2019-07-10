import React, { Component, Suspense } from 'react';
import './Home.css';

const StoreItem = React.lazy(() => import('../components/StoreItem'));

export default class Home extends Component {
  state = {
    count: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  }
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', flexFlow: 'row wrap' }}>
        {this.state.count.map((item, index) => (
          <Suspense fallback={<div>...Loading</div>} key={index}>
            <StoreItem/>
          </Suspense>
        ))}
      </div>
    )
  }
}