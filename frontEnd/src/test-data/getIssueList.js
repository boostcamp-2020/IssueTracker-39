import {rest} from 'msw';
export const issueListDummyData = [
  {
    idx: 7,
    title: 'title7',
    createdTime: '2020-10-28T09:52:39.000Z',
    closedTime: null,
    status: true,
    authorUser: {idx: 2, userId: 'boost'},
    assigneeUser: [
      {idx: 2, userId: 'boost', assignees: {issueIdx: 7, userIdx: 2}},
    ],
    labels: [],
    milestone: {
      idx: 1,
      title: 'milestone1',
      description: 'description1',
      dueDate: '2020-10-27T09:52:39.000Z',
    },
  },
  {
    idx: 8,
    title: 'title8',
    createdTime: '2020-10-25T09:52:39.000Z',
    closedTime: '2020-10-27T09:52:39.000Z',
    status: true,
    authorUser: {idx: 2, userId: 'boost'},
    assigneeUser: [
      {idx: 2, userId: 'boost', assignees: {issueIdx: 8, userIdx: 2}},
    ],
    labels: [],
    milestone: {
      idx: 2,
      title: 'milestone2',
      description: 'description2',
      dueDate: '2020-10-27T09:52:39.000Z',
    },
  },
  {
    idx: 4,
    title: 'title4',
    createdTime: '2020-10-24T09:52:39.000Z',
    closedTime: null,
    status: true,
    authorUser: {idx: 1, userId: 'test'},
    assigneeUser: [],
    labels: [
      {
        idx: 4,
        title: 'error',
        color: 'lime',
        description: '에러입니다.',
        issueLabel: {issueIdx: 4, labelIdx: 4},
      },
      {
        idx: 5,
        title: 'not Important',
        color: 'lightgray',
        description: '중요하지 않습니다.',
        issueLabel: {issueIdx: 4, labelIdx: 5},
      },
      {
        idx: 6,
        title: 'easy',
        color: 'yellow',
        description: '쉽습니다.',
        issueLabel: {issueIdx: 4, labelIdx: 6},
      },
    ],
    milestone: {
      idx: 1,
      title: 'milestone1',
      description: 'description1',
      dueDate: '2020-10-27T09:52:39.000Z',
    },
  },
  {
    idx: 6,
    title: 'title6',
    createdTime: '2020-10-24T09:52:39.000Z',
    closedTime: null,
    status: true,
    authorUser: {idx: 2, userId: 'boost'},
    assigneeUser: [
      {idx: 2, userId: 'boost', assignees: {issueIdx: 6, userIdx: 2}},
    ],
    labels: [],
    milestone: {
      idx: 1,
      title: 'milestone1',
      description: 'description1',
      dueDate: '2020-10-27T09:52:39.000Z',
    },
  },
  {
    idx: 3,
    title: 'title3',
    createdTime: '2020-10-23T09:52:39.000Z',
    closedTime: null,
    status: true,
    authorUser: {idx: 1, userId: 'test'},
    assigneeUser: [
      {idx: 1, userId: 'test', assignees: {issueIdx: 3, userIdx: 1}},
    ],
    labels: [
      {
        idx: 3,
        title: 'important',
        color: 'red',
        description: '중요합니다.',
        issueLabel: {issueIdx: 3, labelIdx: 3},
      },
    ],
    milestone: null,
  },
  {
    idx: 2,
    title: 'title2',
    createdTime: '2020-10-22T09:52:39.000Z',
    closedTime: null,
    status: false,
    authorUser: {idx: 1, userId: 'test'},
    assigneeUser: [
      {idx: 1, userId: 'test', assignees: {issueIdx: 2, userIdx: 1}},
    ],
    labels: [
      {
        idx: 2,
        title: 'frontend',
        color: 'blue',
        description: '프론트앤드 테그입니다.',
        issueLabel: {issueIdx: 2, labelIdx: 2},
      },
      {
        idx: 4,
        title: 'error',
        color: 'lime',
        description: '에러입니다.',
        issueLabel: {issueIdx: 2, labelIdx: 4},
      },
      {
        idx: 6,
        title: 'easy',
        color: 'yellow',
        description: '쉽습니다.',
        issueLabel: {issueIdx: 2, labelIdx: 6},
      },
    ],
    milestone: {
      idx: 1,
      title: 'milestone1',
      description: 'description1',
      dueDate: '2020-10-27T09:52:39.000Z',
    },
  },
  {
    idx: 1,
    title: 'title1',
    createdTime: '2020-10-17T09:52:39.000Z',
    closedTime: null,
    status: true,
    authorUser: {idx: 1, userId: 'test'},
    assigneeUser: [
      {idx: 1, userId: 'test', assignees: {issueIdx: 1, userIdx: 1}},
    ],
    labels: [
      {
        idx: 1,
        title: 'backend',
        color: 'green',
        description: '백앤드 태그입니다.',
        issueLabel: {issueIdx: 1, labelIdx: 1},
      },
      {
        idx: 2,
        title: 'frontend',
        color: 'blue',
        description: '프론트앤드 테그입니다.',
        issueLabel: {issueIdx: 1, labelIdx: 2},
      },
      {
        idx: 3,
        title: 'important',
        color: 'red',
        description: '중요합니다.',
        issueLabel: {issueIdx: 1, labelIdx: 3},
      },
      {
        idx: 4,
        title: 'error',
        color: 'lime',
        description: '에러입니다.',
        issueLabel: {issueIdx: 1, labelIdx: 4},
      },
    ],
    milestone: {
      idx: 1,
      title: 'milestone1',
      description: 'description1',
      dueDate: '2020-10-27T09:52:39.000Z',
    },
  },
  {
    idx: 5,
    title: 'title5',
    createdTime: '2020-10-01T09:52:39.000Z',
    closedTime: null,
    status: true,
    authorUser: {idx: 1, userId: 'test'},
    assigneeUser: [
      {idx: 1, userId: 'test', assignees: {issueIdx: 5, userIdx: 1}},
    ],
    labels: [],
    milestone: {
      idx: 2,
      title: 'milestone2',
      description: 'description2',
      dueDate: '2020-10-27T09:52:39.000Z',
    },
  },
];

export const getIssueListPost = rest.post(
  '/api/issue/list',
  (req, res, ctx) => {
    return res(ctx.json(issueListDummyData));
  },
);
export default rest.get('/api/issue/list', (req, res, ctx) => {
  return res(ctx.json(issueListDummyData));
});
