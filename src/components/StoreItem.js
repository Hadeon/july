import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useInView } from 'react-intersection-observer';
import './StoreItem.css';

const StoreItem = (props) => {
  let state = useSelector(state => state);

  const [ref, inView] = useInView({
    threshold: 0
  })

  const addToCart = () => {
    console.log(`Added ${props.itemNumber}`)
  }

  return (
    <div className="store-item-container" ref={ref}>
      { inView ? (
        <React.Fragment>
          <h3>This is an item</h3>
          <p>Some details. It's a thing. It's great. Now buy it please.</p>
          <h4>$10</h4>
          <p>{props.itemNumber}</p>
          <button className="store-item-add" onClick={addToCart}>Add to Cart</button>
        </React.Fragment>
      ) : <React.Fragment>...Loading</React.Fragment> }
    </div>
  )
}
 
export default StoreItem;