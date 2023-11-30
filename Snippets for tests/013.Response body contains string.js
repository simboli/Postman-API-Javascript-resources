/*
013.Response body contains string.js
Test scripts are written in JavaScript, and are run after the response is received.
*/
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("string_you_want_to_search");
});