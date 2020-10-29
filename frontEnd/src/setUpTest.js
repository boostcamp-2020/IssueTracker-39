import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import 'isomorphic-fetch';
import {setupServer} from 'msw/node';
import {rest} from 'msw';

const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const {username} = req.body;

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      }),
    );
  }),
];

// Setup requests interception using the given handlers.
const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

export default server;
