import React, {useEffect, useState} from 'react';

// components
import PopularFoodItem from './popularFoodsList/PopularFoodItem';

//Start
const PopularFoodsList = () => {
  const [hasError, setErrors] = useState(false);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:3001/restaurants/dishes?type=1&numResults=5&location=canada`);
      res
        .json()
        .then(res => setDishes(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  });

  return (
    <div className="popular-foods-list">
      <div pure-g>
        {dishes.map((dish) => (<div className="pure-u-1">
          <PopularFoodItem restaurantName={dish.restaurantName} dishName= {dish.name}/>
          </div>))}
      </div>
    </div>
  )
}

export default PopularFoodsList;