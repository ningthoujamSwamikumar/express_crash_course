const moment = require("moment")

//this is middleware: where req and res objects can be accessed and modified
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
    next(); //to move to next middleware if exist orelse handled the request
}

module.exports = logger;