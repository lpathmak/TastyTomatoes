import React from 'react';

function PopularFoodItem(props) {
  return (
    <p className = "popular-food-item">{props.dishName} at {props.restaurantName}</p>
  );
}

export default PopularFoodItem;