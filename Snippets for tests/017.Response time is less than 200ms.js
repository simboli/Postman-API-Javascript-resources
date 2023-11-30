/*
017.Response time is less than 200ms.js
Test scripts are written in JavaScript, and are run after the response is received.
*/
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});