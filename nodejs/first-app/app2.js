var url= 'http://mylogger.io/log';

function logMessage(message) {
    // Send an HTTP request
    console.log(message);
}

module.exports.logMessage = logMessage;
//module.exports.endPoint = url;