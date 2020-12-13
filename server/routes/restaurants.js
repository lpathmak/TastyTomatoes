var express = require('express');
var router = express.Router();

/* GET restaurants listing. */
/* Test this with: 
 * http://localhost:3001/restaurants/listings?ipAddress=1.1.2.3&city=markham&sortPriority=1&numResults=3
 */
router.get('/listings', function(req, res, next) {
    location = {};
    location.postalCode = req.query.postalCode;
    location.ipAddress = req.query.ipAddress;
    location.city = req.query.city;
    location.country = req.query.country;

    sortPriority = req.query.sortPriority;

    numResults = req.query.numResults;

    restaurantList = getRestaurantList(location, sortPriority, numResults);

    res.send(restaurantList);
});

router.get('/dishes', function(req, res, next) {

  location = req.query.location;
  sortPriority = req.query.type;
  numResults = req.query.numResults;

  //get restaurants within range
  restaurants = getRestaurantList(location); 

  //get dishes based on restaurant using priority
  dishes = getDishesFromRestaurants(restaurants, sortPriority, numResults); 

  res.send(dishes)

});

/* Retrieve list of restaurants based on query parameters */
function getRestaurantList(location) {
    restaurantList = [];

    //TODO replace with sql call
    //dummy data
    for(let i = 1; i <= 5; i++) {
        dummyRestaurant = {};
        dummyRestaurant.name = '#' + i + ' Restaurant';
        dummyRestaurant.location = location;
        restaurantList.push(dummyRestaurant);
    }

    return restaurantList;
}

function getDishesFromRestaurants(restaurants, sortPriority, numResults) {
    dishes = [];
    switch(sortPriority) {
        // By popularity
        case '1':
            //dummy data
            for(let i = 1; i <= numResults; i++) {
                dummyDish = {};
                dummyDish.name = '#' + i + ' Dishes';
                dummyDish.restaurantName = restaurants[i-1].name;
                dishes.push(dummyDish);
            }

            break;
        default:
            dishes.push('Unhandled sortPriority: ' + sortPriority);
            break;
    }

    return dishes;
}

module.exports = router;
