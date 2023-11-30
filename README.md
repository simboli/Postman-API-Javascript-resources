# Postman-API-Javascript-resources
Postman API Javascript resources

## Test Scripts:

### Introduction:
In Postman, a test script is a piece of code that allows you to automate the validation of the responses your API returns. Think of it as your personal QA assistant.

### How to Write a Basic Test Script:
1. **Access the Tests Tab:**
   - After sending a request, click on the "Tests" tab in the request pane.

2. **JavaScript Syntax:**
   - Test scripts are written in JavaScript. Familiarize yourself with basic JavaScript if you haven't already.

3. **Example Script:**
   - Let's say you want to check if the response status is 200 (OK).
   ```javascript
   pm.test("Status code is 200", function () {
       pm.response.to.have.status(200);
   });
   ```

### Advanced Test Scripts:

1. **Chaining Requests:**
   - You can chain requests within a collection using test scripts, ensuring a seamless workflow. For example, extract data from one response and use it in another request.

2. **Response Assertions:**
   - Leverage built-in methods like `pm.response.to.have.property` to assert specific properties in the response.

3. **Dynamic Variables:**
   - Use variables to make your scripts dynamic. Extract data from responses and reuse it in subsequent requests.

4. **Test Collections:**
   - Organize your tests into collections, allowing you to run multiple scripts in a sequence.

## Pre-request Scripts:

### Introduction:
A pre-request script runs before the actual request is sent. It's your chance to set up variables, modify the request, or authenticate before hitting the endpoint.

### How to Write a Basic Pre-request Script:
1. **Access the Pre-request Script Tab:**
   - Click on the "Pre-request Script" tab in the request pane.

2. **JavaScript Syntax:**
   - Pre-request scripts also use JavaScript. Utilize this to prepare your request.

3. **Example Script:**
   - If you need to set a header before each request, you can do it like this:
   ```javascript
   pm.headers.add({ key: 'Authorization', value: 'Bearer YOUR_ACCESS_TOKEN' });
   ```

### Advanced Pre-request Scripts:

1. **Dynamic Data Generation:**
   - Generate dynamic data like timestamps or unique identifiers to include in your request.

2. **Environment Variables:**
   - Utilize environment variables for flexibility. Switch environments easily without changing scripts.

3. **Authentication:**
   - Handle authentication dynamically, extracting tokens from responses and using them in subsequent requests.

4. **Global Scripts:**
   - Create scripts that run before any request in your collection, maintaining consistency.

## Best Practices:

1. **Documentation:**
   - Comment your scripts for clarity and future reference.

2. **Error Handling:**
   - Implement error handling in your scripts to gracefully manage unexpected situations.

3. **Regular Maintenance:**
   - APIs evolve. Regularly review and update your scripts to adapt to changes.

4. **Community Resources:**
   - Explore the Postman community for shared scripts and solutions to common challenges.


## Execution Timing of Pre-request and Test Scripts in Postman

### Pre-request Scripts:

A "Pre-request" script is executed before the actual API request is sent. It provides developers with a designated space to perform setup tasks, such as:

- **Authentication:** Set up tokens or credentials required for the upcoming request.
- **Data Preparation:** Generate dynamic data or variables needed for the request.
- **Header Configuration:** Modify headers to meet specific requirements.

By running before the request, the "Pre-request" script ensures that the request is properly configured and authenticated, setting the stage for a successful API call.

### Test Scripts:

Conversely, a "Test" script is executed after the API request has been sent, and the response has been received. The primary purpose of the "Test" script is to automate the validation of the response. This includes:

- **Response Assertions:** Check if the response meets expected criteria, such as status codes or specific data.
- **Chaining Requests:** Utilize data from the response to modify or trigger subsequent requests.
- **Dynamic Variables:** Extract information from the response and use it in other parts of the collection.

In summary, while the "Pre-request" script prepares the groundwork for the request, the "Test" script analyzes and verifies the results after the request has been processed. Together, these scripts empower developers to create robust and automated API workflows within Postman.
