const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

const googleREST = 'http://fakestoresapi.mybluemix.net/api/google/verify/applications/aaaaaaa/purchases/products/bbbbbbb/tokens/cccccccc?access_token=23132321132';
const appleREST = 'http://fakestoresapi.mybluemix.net/api/apple/verify';

function checkStatus(response)
{
    if (response.status >= 200 && response.status < 300)
    {
        console.log('Response OK > ' + response.status);
        return response.json();
    }
    else
    {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

router.get('/get-google', function (req, res, next)
{
    console.log('Calling Google API at ' + googleREST);

    fetch(googleREST).then( (response) =>

        checkStatus(response)

    ).then( (receivedData) =>
    {
        res.setHeader('Content-Type', 'application/json');
        console.log('Received Data: ' + JSON.stringify(receivedData));
        res.send(receivedData);

    }).catch(function (error)
    {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    });


});

router.get('/get-apple', function (req, res, next)
{

    console.log('Calling Apple API at ' + appleREST);

    const appleData = {
        "receipt-data": "238h6vxetzb238rxt23crttcrt2xby8tnu"
    };

    fetch(appleREST, {
        method: 'post',
        body: JSON.stringify(appleData),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then( (response) => checkStatus(response) )
    .then((data) =>
    {
        res.setHeader('Content-Type', 'application/json');
        console.log('Data Received: ' + JSON.stringify(data));
        res.send(data);
    });


});

module.exports = router;
