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
  location = {};
  location.postalCode = req.query.postalCode;
  location.ipAddress = req.query.ipAddress;
  location.city = req.query.city;
  location.country = req.query.country;
});

/* Retrieve list of restaurants based on query parameters */
function getRestaurantList(location, sortPriority, numResults) {
    restaurantList = [];
    switch(sortPriority) {
        // By popularity
        case '1':
            for(let i = 1; i <= numResults; i++) {
                dummyRestaurant = {};
                dummyRestaurant.name = '#' + i + ' Restaurant';
                dummyRestaurant.location = location;
                restaurantList.push(dummyRestaurant);
            }
            break;
        default:
            restaurantList.push('Unhandled sortPriority: ' + sortPriority);
            break;
    }
    return restaurantList;
}

function rankDishes(dishes, rankDefinition) {

}

module.exports = router;
