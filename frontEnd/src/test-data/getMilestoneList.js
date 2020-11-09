import {rest} from 'msw';
export default rest.get('/api/milestone/list', (req, res, ctx) => {
  return res(ctx.json());
});

export const milestoneDummyData = [
  {
      "idx": 1,
      "title": "milestone1",
      "description": "description1",
      "dueDate": "2020-10-27T09:52:39.000Z",
      "openedIssues": 4,
      "closedIssues": 1
  },
  {
      "idx": 2,
      "title": "milestone2",
      "description": "description2",
      "dueDate": "2020-10-27T09:52:39.000Z",
      "openedIssues": 2,
      "closedIssues": 0
  }
]
