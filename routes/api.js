const express = require('express');
const router = express.Router();

const googleREST = '';
const appleREST = '';

/* GET users listing. */
router.get('/get-google', function(req, res, next) {

    res.setHeader('Content-Type', 'application/json');
    console.log('Calling Google API at '+ googleREST);

    const googleResponse = {
        "kind": "androidpublisher#productPurchase",
        "purchaseTimeMillis": Date.now(),
        "purchaseState": 0, // 0=purchased, 1=cancelled
        "consumptionState": 0, // 0=to be consumed, 1=consumed
        "developerPayload": "This is the developer payload",
        "orderId": "3289HJHHK987393J",
        "purchaseType": 0 // 0=test, 1=promo
    };

    res.send(googleResponse);

});

router.get('/get-apple', function(req, res, next) {

    res.setHeader('Content-Type', 'application/json');
    console.log('Calling Apple API at '+ appleREST);

    const appleResponse = {
        "kind": "androidpublisher#productPurchase",
        "purchaseTimeMillis": Date.now(),
        "purchaseState": 0, // 0=purchased, 1=cancelled
        "consumptionState": 0, // 0=to be consumed, 1=consumed
        "developerPayload": "This is the developer payload",
        "orderId": "3289HJHHK987393J",
        "purchaseType": 0 // 0=test, 1=promo
    };

    res.send(appleResponse);
});

module.exports = router;
