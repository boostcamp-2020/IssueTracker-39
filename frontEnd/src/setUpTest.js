import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import 'isomorphic-fetch';
import {setupServer} from 'msw/node';
import {rest} from 'msw';
import issueListDummy from './models/IssueListDummy';
import getLabelList from '~/*/test-data/getLabelList';
import getAssigneeList from '~/*/test-data/getAuthorList';
import getAuthorList from '~/*/test-data/getAuthorList';
import getIssueList, {getIssueListPost} from '~/*/test-data/getIssueList';
import getMilestoneList from '~/*/test-data/getMilestoneList';
delete window.location;
window.location = {
  assign: jest.fn(),
  href: 'http://localhost',
  origin: 'http://localhost',
};

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
  rest.get('/api/issue/list', (req, res, ctx) => {
    return res(ctx.json(issueListDummy()));
  }),
  getLabelList,
  getAssigneeList,
  getAuthorList,
  getIssueList,
  getIssueListPost,
  getMilestoneList,
];

// Setup requests interception using the given handlers.
const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  window.location.assign.mockClear();
  window.location.href = 'http://localhost';
  window.location.origin = 'http://localhost';
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

export default server;
