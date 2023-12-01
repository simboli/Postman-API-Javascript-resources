![Postman application logo](https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Postman_(software).png)
# Postman-API-Javascript-resources

## Test Scripts

### Introduction
In Postman, a test script is a piece of code that allows you to automate the validation of the responses your API returns. Think of it as your personal QA assistant.

### How to Write a Basic Test Script
1. **Access the Tests Tab**
   - After sending a request, click on the "Tests" tab in the request pane.

2. **JavaScript Syntax**
   - Test scripts are written in JavaScript. Familiarize yourself with basic JavaScript if you haven't already.

3. **Example Script**
   - Let's say you want to check if the response status is 200 (OK).
   ```javascript
   pm.test("Status code is 200", function () {
       pm.response.to.have.status(200);
   });
   ```

### Snippets (from Postman application)

- [001.Get an environment variable.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/001.Get%20an%20environment%20variable.js>)
- [002.Get a global variable.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/002.Get%20a%20global%20variable.js>)
- [003.Get a variable.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/003.Get%20a%20variable.js>)
- [004.Get a collection variable.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/004.Get%20a%20collection%20variable.js>)
- [005.Set an environment variable.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/005.Set%20an%20environment%20variable.js>)
- [006.Set a global variable.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/006.Set%20a%20global%20variable.js>)
- [007.Set a collection variable.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/007.Set%20a%20collection%20variable.js>)
- [008.Clear an environment variable.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/008.Clear%20an%20environment%20variable.js>)
- [009.Clear a global variable.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/009.Clear%20a%20global%20variable.js>)
- [010.Clear a collection variable.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/010.Clear%20a%20collection%20variable.js>)
- [011.Send a request.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/011.Send%20a%20request.js>)
- [012.Status code code is 200.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/012.Status%20code%20code%20is%20200.js>)
- [013.Response body contains string.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/013.Response%20body%20contains%20string.js>)
- [014.Response body JSON value check.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/014.Response%20body%20JSON%20value%20check.js>)
- [015.Response body is equal to a string.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/015.Response%20body%20is%20equal%20to%20a%20string.js>)
- [016.Response headers content-type header check.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/016.Response%20headers%20content-type%20header%20check.js>)
- [017.Response time is less than 200ms.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/017.Response%20time%20is%20less%20than%20200ms.js>)
- [018.Status code Successful POST request.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/018.Status%20code%20Successful%20POST%20request.js>)
- [019.Status code Code name has string.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/019.Status%20code%20Code%20name%20has%20string.js>)
- [020.Response body convert XML body to a JSON Object.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/020.Response%20body%20convert%20XML%20body%20to%20a%20JSON%20Object.js>)
- [021.Use Tiny Validator for JSON data.js](<https://github.com/simboli/Postman-API-Javascript-resources/blob/main/Snippets%20for%20tests/021.Use%20Tiny%20Validator%20for%20JSON%20data.js>)

## Pre-request Scripts

### Introduction
A pre-request script runs before the actual request is sent. It's your chance to set up variables, modify the request, or authenticate before hitting the endpoint.

### How to Write a Basic Pre-request Script
1. **Access the Pre-request Script Tab**
   - Click on the "Pre-request Script" tab in the request pane.

2. **JavaScript Syntax**
   - Pre-request scripts also use JavaScript. Utilize this to prepare your request.

3. **Example Script**
   - If you need to set a header before each request, you can do it like this:
   ```javascript
   pm.headers.add({ key: 'Authorization', value: 'Bearer YOUR_ACCESS_TOKEN' });
   ```

### Snippets (from Postman application)
- 001.Get an environment variable.js
- 002.Get a global variable.js
- 003.Get a variable.js
- 004.Get a collection variable.js
- 005.Set an environment variable.js
- 006.Set a global variable.js
- 007.Set a collection variable.js
- 008.Clear an environment variable.js
- 009.Clear a global variable.js
- 010.Clear a collection variable.js
- 011.Send a request.js


## Execution Timing of Pre-request and Test Scripts in Postman

### Pre-request Scripts

A "Pre-request" script is executed before the actual API request is sent. It provides developers with a designated space to perform setup tasks, such as:

- **Authentication:** Set up tokens or credentials required for the upcoming request.
- **Data Preparation:** Generate dynamic data or variables needed for the request.
- **Header Configuration:** Modify headers to meet specific requirements.

By running before the request, the "Pre-request" script ensures that the request is properly configured and authenticated, setting the stage for a successful API call.

### Test Scripts

Conversely, a "Test" script is executed after the API request has been sent, and the response has been received. The primary purpose of the "Test" script is to automate the validation of the response. This includes:

- **Response Assertions:** Check if the response meets expected criteria, such as status codes or specific data.
- **Chaining Requests:** Utilize data from the response to modify or trigger subsequent requests.
- **Dynamic Variables:** Extract information from the response and use it in other parts of the collection.

In summary, while the "Pre-request" script prepares the groundwork for the request, the "Test" script analyzes and verifies the results after the request has been processed. Together, these scripts empower developers to create robust and automated API workflows within Postman.
