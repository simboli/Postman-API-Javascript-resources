/*
011.Send a request.js
Pre-request scripts are written in JavaScript, and are run before the request is sent.
*/
pm.sendRequest("https://postman-echo.com/get", function (err, response) {
    console.log(response.json());
});