/*
012.Status code code is 200.js
Test scripts are written in JavaScript, and are run after the response is received.
*/
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});