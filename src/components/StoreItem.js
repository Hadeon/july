import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './StoreItem.css';

// Once inView, the component shouldn't rerender to <React.Fragment> as this means any scroll up/down would trigger an excessive number of API calls... 
// Simply use inView to set a state to true, and don't have a way to set it back to false
// Perhaps pull this all up to a new Observer component and use React.lazy() to render the actual StoreItem (with the API call within), this way we can use a loading animation while waiting for the response
// If there are 1000 StoreItems this method would still render 1000 empty React.Fragments. It'd be better to just render a single React.Fragment at the bottom, and add StoreItems on scroll, but how?
// - Perhaps use a query to determine the total number of StoreItems in the DB and then just render based off a comparison of a state such as renderedItems. So while this renderedItems < totalItems, continue to render more StoreItems
// There's probably a better way to do it, but I'll have to do some research


// On Store render, query a list of all the item Ids so we just have a large array with no extra data
// Use the renderedItems state to track what in that array is rendered
// On scroll, render more StoreItems while iterating through the array with the renderedItems index


// Test speed of both methods to see which is more efficient if there were hypothetically thousands of items (which there won't be but still good to know)


const StoreItem = () => {
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
        </React.Fragment>
      ) : <React.Fragment/> }

    </div>
  )
}
 
export default StoreItem;