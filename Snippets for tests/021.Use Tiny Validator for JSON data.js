/*
021.Use Tiny Validator for JSON data.js
Test scripts are written in JavaScript, and are run after the response is received.
*/
var schema = {
    "items": {
        "type": "boolean"
    }
};

var data1 = [true, false];
var data2 = [true, 123];

pm.test('Schema is valid', function () {
    pm.expect(tv4.validate(data1, schema)).to.be.true;
    pm.expect(tv4.validate(data2, schema)).to.be.true;
});