const express = require('express');
const app = express();

const port = process.env.PORT || 80;


app.get('/answer-url', (req, res) => {

    var action = "connect";
    var type = "";
    // var fromInternal = new Boolean(false);

    var fromInternal = req.query.fromInternal;
    var numberFrom = req.query.userId;
    var numberTo = req.query.to;

    if (fromInternal == "true") {
        type = "internal"
    }


    var from = {
        "type": type,
        "number": numberFrom,
        "alias": "user_1"
    }

    var to = {
        "type": type,
        "number": numberTo,
        "alias": "user_2"
    }

    var customData = "test-custom-data";
    var continueOnFail = false;
    var timeout = 45;

    var result = [{
        action,
        from,
        to,

        customData,
        continueOnFail,
        timeout
    }];


    res.status(200).json(result);
})

app.get('/', (req, res) => {
    res.send('OK')
})

app.listen(port, () => {
    console.log('connected: ' + port)
})

