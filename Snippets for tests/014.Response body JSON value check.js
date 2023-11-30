/*
014.Response body JSON value check.js
Test scripts are written in JavaScript, and are run after the response is received.
*/
pm.test("Your test name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.value).to.eql(100);
});