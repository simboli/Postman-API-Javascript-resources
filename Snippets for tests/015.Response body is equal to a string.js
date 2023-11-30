/*
015.Response body is equal to a string.js
Test scripts are written in JavaScript, and are run after the response is received.
*/
pm.test("Body is correct", function () {
    pm.response.to.have.body("response_body_string");
});