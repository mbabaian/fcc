// basic required imports for Node.js

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

// Create an instance of express for app
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

// set up get request, return JSON that formats natural and unix date
app.get('/:dateVal', function(req, res, next) {
    // get request for data
    var dateVal = req.params.dateVal;
    //options for formatting date in natural language
    var dateFormattingOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    if(isNaN(dateVal)) {
        var naturalDate = new Date(dateVal);
        naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
        // divide time by 1000 to convert from milliseconds
        var unixDate = new Date(dateVal).getTime()/1000;
    }

    else {
        var unixDate = dateVal;
        var naturalDate = new Date(dateVal * 1000);
        naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
    }


    res.json({unix: unixDate, natural: naturalDate});
});



app.listen(8080, function(){
    console.log('It is working!');
});
