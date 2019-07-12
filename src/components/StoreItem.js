import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './StoreItem.css';

const StoreItem = (props) => {
  const [ref, inView] = useInView({
    threshold: 0
  })

  return (
    <div className="store-item-container" ref={ref}>
      { inView ? (
        <React.Fragment>
          <h3>This is an item</h3>
          <p>Some details. It's a thing. It's great. Now buy it please.</p>
          <h4>$10</h4>
          <p>{props.itemNumber}</p>
        </React.Fragment>
      ) : <React.Fragment>...Loading</React.Fragment> }
    </div>
  )
}
 
export default StoreItem;