/*
019.Status code Code name has string.js
Test scripts are written in JavaScript, and are run after the response is received.
*/
pm.test("Status code name has string", function () {
    pm.response.to.have.status("Created");
});