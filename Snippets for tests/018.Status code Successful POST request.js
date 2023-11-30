/*
018.Status code Successful POST request.js
Test scripts are written in JavaScript, and are run after the response is received.
*/
pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([201, 202]);
});