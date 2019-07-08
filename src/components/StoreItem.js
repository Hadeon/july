import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './StoreItem.css';

const StoreItem = () => {
  const [ref, inView] = useInView({
    threshold: 0
  })

  return (
    <div className="store-item-container" ref={ref}>
      { inView ? (
        <React.Fragment>
          <h3>This is an item</h3>
          <p>Some details. It's a thing. It's great. Now buy it please. {`${inView}`}</p>
          <h4>$10</h4>
        </React.Fragment>
      ) : <React.Fragment/> }

    </div>
  )
}
 
export default StoreItem;