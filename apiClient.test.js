const makeRequest = require('./apiClient');
const server = require('./mocks/server.js');
const { rest } = require('msw');

test('makes request', async () => {
    let response = await makeRequest();
    console.log(response.data);

    // add another (overriding handler):
    server.use(rest.get('https://www.bbc.co.uk/news', (req, res, ctx) => {
        return res(ctx.body('<html>BBC News is experiencing high load'));
    }));

    response = await makeRequest();
    console.log(response.data);
});