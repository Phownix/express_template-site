import http from "http";
import assert from "assert";
import 'dotenv/config';

// URL and options for the HTTP request
const options = {
    hostname: 'localhost',
    port: process.env.PORT || '3000',
    path: '/',
    method: 'GET'
};

// Make the HTTP request to the route '/'
const req = http.request(options, (res) => {
    // Check the response status code
    assert.strictEqual(res.statusCode, 200);

    let data = '';

    // Handle the data received in the response
    res.on('data', (chunk) => {
        data += chunk;
    });

    // End the request and check the content of the response
    res.on('end', () => {
        assert.ok(data.includes('Welcome to Express Template Site'));
        console.log('Test passed: Home page is rendered correctly.');
    });
});

// Handle errors in the HTTP request
req.on('error', (error) => {
    console.error('Test failed:', error);
});

// End the request
req.end();
