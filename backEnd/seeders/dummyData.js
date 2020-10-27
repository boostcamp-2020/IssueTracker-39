module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        idx: 1,
        userId: 'test',
        userPw: 'test',
      },
      {idx: 2, userId: 'boost', userPw: 'camp'},
    ]);
    await queryInterface.bulkInsert('labels', [
      {
        idx: 1,
        title: 'backend',
        color: 'green',
        description: '백앤드 태그입니다.',
      },
      {
        idx: 2,
        title: 'frontend',
        color: 'blue',
        description: '프론트앤드 테그입니다.',
      },
      {
        idx: 3,
        title: 'important',
        color: 'red',
        description: '중요합니다.',
      },
      {
        idx: 4,
        title: 'error',
        color: 'lightred',
        description: '에러입니다.',
      },
      {
        idx: 5,
        title: 'not Important',
        color: 'lightgray',
        description: '중요하지 않습니다.',
      },
      {idx: 6, title: 'easy', color: 'yellow', description: '쉽습니다.'},
    ]);
    await queryInterface.bulkInsert('milestones', [
      {
        idx: 1,
        title: 'milestone1',
        description: 'description1',
        dueDate: new Date(),
      },
      {
        idx: 2,
        title: 'milestone2',
        description: 'description2',
        dueDate: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('issues', [
      {
        idx: 1,
        author: 1,
        title: 'title1',
        content: 'content1',
        createdTime: new Date(),
        closedTime: null,
        status: 1,
        milestoneIdx: 1,
      },
      {
        idx: 2,
        author: 1,
        title: 'title2',
        content: 'content2',
        createdTime: new Date(),
        closedTime: null,
        status: 1,
        milestoneIdx: 1,
      },
      {
        idx: 3,
        author: 1,
        title: 'title3',
        content: 'content3',
        createdTime: new Date(),
        closedTime: null,
        status: 1,
        milestoneIdx: 1,
      },
      {
        idx: 4,
        author: 1,
        title: 'title4',
        content: 'content4',
        createdTime: new Date(),
        closedTime: null,
        status: 1,
        milestoneIdx: 1,
      },
      {
        idx: 5,
        author: 1,
        title: 'title5',
        content: 'content5',
        createdTime: new Date(),
        closedTime: null,
        status: 1,
        milestoneIdx: 2,
      },
      {
        idx: 6,
        author: 2,
        title: 'title6',
        content: 'content6',
        createdTime: new Date(),
        closedTime: null,
        status: 1,
        milestoneIdx: 1,
      },
      {
        idx: 7,
        author: 2,
        title: 'title7',
        content: 'content7',
        createdTime: new Date(),
        closedTime: null,
        status: 1,
        milestoneIdx: 1,
      },
      {
        idx: 8,
        author: 2,
        title: 'title8',
        content: 'content8',
        createdTime: new Date(),
        closedTime: new Date(),
        status: 1,
        milestoneIdx: 2,
      },
    ]);
    await queryInterface.bulkInsert('assignees', [
      {
        userIdx: 1,
        issueIdx: 1,
      },
      {
        userIdx: 1,
        issueIdx: 2,
      },
      {
        userIdx: 1,
        issueIdx: 3,
      },
      {
        userIdx: 1,
        issueIdx: 4,
      },
      {
        userIdx: 1,
        issueIdx: 5,
      },
      {
        userIdx: 2,
        issueIdx: 6,
      },
      {
        userIdx: 2,
        issueIdx: 7,
      },
      {
        userIdx: 2,
        issueIdx: 8,
      },
    ]);
    await queryInterface.bulkInsert('comments', [
      {
        idx: 1,
        author: 1,
        issueIdx: 1,
        content: '댓글 1등',
      },
      {
        idx: 2,
        author: 1,
        issueIdx: 1,
        content: '댓글 2등',
      },
      {
        idx: 3,
        author: 1,
        issueIdx: 2,
        content: '댓글 3등',
      },
      {
        idx: 4,
        author: 1,
        issueIdx: 3,
        content: '댓글 4등',
      },
      {
        idx: 5,
        author: 1,
        issueIdx: 4,
        content: '댓글 5등',
      },
      {
        idx: 6,
        author: 1,
        issueIdx: 5,
        content: '댓글 6등',
      },
      {
        idx: 7,
        author: 1,
        issueIdx: 6,
        content: '댓글 7등',
      },
      {
        idx: 8,
        author: 2,
        issueIdx: 1,
        content: '댓글 8등',
      },
      {
        idx: 9,
        author: 2,
        issueIdx: 1,
        content: '댓글 9등',
      },
      {
        idx: 10,
        author: 2,
        issueIdx: 2,
        content: '댓글 10등',
      },
    ]);
    await queryInterface.bulkInsert('issueLabel', [
      {
        issueIdx: 1,
        labelIdx: 1,
      },

      {
        issueIdx: 1,
        labelIdx: 4,
      },

      {
        issueIdx: 1,
        labelIdx: 3,
      },

      {
        issueIdx: 2,
        labelIdx: 6,
      },

      {
        issueIdx: 2,
        labelIdx: 2,
      },
      {
        issueIdx: 3,
        labelIdx: 3,
      },
      {
        issueIdx: 4,
        labelIdx: 4,
      },
      {
        issueIdx: 1,
        labelIdx: 2,
      },
      {
        issueIdx: 2,
        labelIdx: 4,
      },
      {
        issueIdx: 4,
        labelIdx: 5,
      },
      {
        issueIdx: 4,
        labelIdx: 6,
      },
    ]);

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('assignees', null, {});
    await queryInterface.bulkDelete('issueLabel', null, {});
    await queryInterface.bulkDelete('issues', null, {});
    await queryInterface.bulkDelete('milestones', null, {});
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('comments', null, {});
    await queryInterface.bulkDelete('labels', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
