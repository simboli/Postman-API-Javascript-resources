/*
016.Response headers content-type header check.js
Test scripts are written in JavaScript, and are run after the response is received.
*/
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});