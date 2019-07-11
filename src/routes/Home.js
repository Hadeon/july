import React, { Component, Suspense } from 'react';
import './Home.css';

const StoreItem = React.lazy(() => import('../components/StoreItem'));

export default class Home extends Component {
  state = {
    count: 20
  }
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', flexFlow: 'row wrap' }}>
        <Suspense fallback={<div>...Loading</div>} >
          {[...Array(this.state.count)].map((count, index) => (
            <StoreItem key={index}/>
          ))}
        </Suspense>
      </div>
    )
  }
}