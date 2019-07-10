import React, { Component, Suspense } from 'react';
import './Home.css';

const StoreItem = React.lazy(() => import('../components/StoreItem'));

export default class Home extends Component {
  state = {
    count: 5
  }
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', flexFlow: 'row wrap' }}>
        <Suspense fallback={<div>...Loading</div>}>
          <StoreItem/>
        </Suspense>
        <Suspense fallback={<div>...Loading</div>}>
          <StoreItem/>
        </Suspense>
        <Suspense fallback={<div>...Loading</div>}>
          <StoreItem/>
        </Suspense>
        <Suspense fallback={<div>...Loading</div>}>
          <StoreItem/>
        </Suspense>
        <Suspense fallback={<div>...Loading</div>}>
          <StoreItem/>
        </Suspense>
        <Suspense fallback={<div>...Loading</div>}>
          <StoreItem/>
        </Suspense>
        <Suspense fallback={<div>...Loading</div>}>
          <StoreItem/>
        </Suspense>
        <Suspense fallback={<div>...Loading</div>}>
          <StoreItem/>
        </Suspense>
        <Suspense fallback={<div>...Loading</div>}>
          <StoreItem/>
        </Suspense>
        <Suspense fallback={<div>...Loading</div>}>
          <StoreItem/>
        </Suspense>
        <Suspense fallback={<div>...Loading</div>}>
          <StoreItem/>
        </Suspense>
        <Suspense fallback={<div>...Loading</div>}>
          <StoreItem/>
        </Suspense>
        <Suspense fallback={<div>...Loading</div>}>
          <StoreItem/>
        </Suspense>
        <Suspense fallback={<div>...Loading</div>}>
          <StoreItem/>
        </Suspense>
      </div>
    )
  }
}