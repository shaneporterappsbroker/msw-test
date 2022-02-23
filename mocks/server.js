// src/mocks/server.js
const { setupServer } = require('msw/node');
const { rest } = require('msw');

// This configures a request mocking server with the given request handlers.
const server = setupServer(rest.get('https://www.bbc.co.uk/news', (req, res, ctx) => {
    return res(ctx.body('<html>BBC News</html>'))
}));

module.exports = server;