/*
011.Send a request.js
Test scripts are written in JavaScript, and are run after the response is received.
*/
pm.sendRequest("https://postman-echo.com/get", function (err, response) {
    console.log(response.json());
});