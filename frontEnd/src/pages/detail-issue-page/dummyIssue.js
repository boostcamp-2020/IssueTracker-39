export const dummyIssue = {
  idx: 1,
  title: 'title1',
  content: 'content1',
  createdTime: '2020-10-17T09:52:39.000Z',
  closedTime: null,
  status: true,
  author: 1,
  milestoneIdx: 1,
  authorUser: {
    idx: 1,
    userId: 'test',
  },
  assigneeUser: [
    {
      idx: 1,
      userId: 'test',
      assignees: {
        issueIdx: 1,
        userIdx: 1,
      },
    },
  ],
  milestone: {
    idx: 1,
    title: 'milestone1',
    description: 'description1',
    dueDate: '2020-10-27T09:52:39.000Z',
  },
  labels: [
    {
      idx: 1,
      title: 'backend',
      color: 'green',
      description: '백앤드 태그입니다.',
      issueLabel: {
        issueIdx: 1,
        labelIdx: 1,
      },
    },
    {
      idx: 2,
      title: 'frontend',
      color: 'blue',
      description: '프론트앤드 테그입니다.',
      issueLabel: {
        issueIdx: 1,
        labelIdx: 2,
      },
    },
    {
      idx: 3,
      title: 'important',
      color: 'red',
      description: '중요합니다.',
      issueLabel: {
        issueIdx: 1,
        labelIdx: 3,
      },
    },
    {
      idx: 4,
      title: 'error',
      color: 'lime',
      description: '에러입니다.',
      issueLabel: {
        issueIdx: 1,
        labelIdx: 4,
      },
    },
  ],
};

export const dummyComment = [
  {
    idx: 1,
    content: '댓글 1등',
    createdTime: '2020-10-01T09:52:39.000Z',
    user: {
      userId: 'test',
    },
  },
  {
    idx: 2,
    content: '댓글 2등',
    createdTime: '2020-10-01T09:52:39.000Z',
    user: {
      userId: 'test',
    },
  },
  {
    idx: 3,
    content: '댓글 3등',
    createdTime: '2020-10-01T09:52:39.000Z',
    user: {
      userId: 'test',
    },
  },
  {
    idx: 4,
    content: '댓글 4등',
    createdTime: '2020-10-01T09:52:39.000Z',
    user: {
      userId: 'test',
    },
  },
  {
    idx: 5,
    content: '댓글 5등',
    createdTime: '2020-10-01T09:52:39.000Z',
    user: {
      userId: 'test',
    },
  },
  {
    idx: 6,
    content: '댓글 6등',
    createdTime: '2020-10-01T09:52:39.000Z',
    user: {
      userId: 'test',
    },
  },
  {
    idx: 7,
    content: '댓글 7등',
    createdTime: '2020-10-01T09:52:39.000Z',
    user: {
      userId: 'test',
    },
  },
  {
    idx: 8,
    content: '댓글 8등',
    createdTime: '2020-10-01T09:52:39.000Z',
    user: {
      userId: 'boost',
    },
  },
  {
    idx: 9,
    content: '댓글 9등',
    createdTime: '2020-10-01T09:52:39.000Z',
    user: {
      userId: 'boost',
    },
  },
  {
    idx: 10,
    content: '댓글 10등',
    createdTime: '2020-10-01T09:52:39.000Z',
    user: {
      userId: 'boost',
    },
  },
];
