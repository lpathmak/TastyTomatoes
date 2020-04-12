import React from 'react';

// components
import PopularFoodItem from './popularFoodsList/PopularFoodItem'

function PopularFoodsList() {
  return (
    <div className="popular-foods-list">
      <div pure-g>
        <div className="pure-u-1">
          <PopularFoodItem restaurantName="Restaurant 1" dishName="Popular Dish 1"/>
        </div>
        <div className="pure-u-1">
          <PopularFoodItem restaurantName="Restaurant 2" dishName="Popular Dish 2"/>
        </div>
        <div className="pure-u-1">
          <PopularFoodItem restaurantName="Restaurant 3" dishName="Popular Dish 3"/>
        </div>
        <div className="pure-u-1">
          <PopularFoodItem restaurantName="Restaurant 4" dishName="Popular Dish 4"/>
        </div>
        <div className="pure-u-1">
          <PopularFoodItem restaurantName="Restaurant 5" dishName="Popular Dish 5"/>
        </div>
      </div>
    </div>
  );
}

export default PopularFoodsList;