module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        idx: 1,
        userId: 'lacomaco122@gmail.com',
      },
      {idx: 2, userId: 'mon823@naver.com'},
      {idx: 3, userId: 'hojin5633@gmail.com'},
      {idx: 4, userId: 'lee.yeonjeong.lee@gmail.com'},
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
        description: '프론트앤드 태그입니다.',
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
        color: 'lime',
        description: '에러입니다.',
      },
      {
        idx: 5,
        title: 'not Important',
        color: 'lightgray',
        description: '중요하지 않습니다.',
      },
      {idx: 6, title: 'docs', color: 'yellow', description: '문서작업입니다.'},
    ]);
    await queryInterface.bulkInsert('milestones', [
      {
        idx: 1,
        title: 'Milestone Week1',
        description: '첫 번째 주 마일스톤',
        dueDate: new Date('2020-10-20T09:52:39.000Z'),
      },
      {
        idx: 2,
        title: 'Milestone2',
        description: '두 번째 마일스톤',
        dueDate: new Date('2020-10-27T09:52:39.000Z'),
      },
    ]);
    await queryInterface.bulkInsert('issues', [
      {
        idx: 1,
        author: 1,
        title: 'Nodejs Template 만들기',
        content: 'Nodejs Template 만들기',
        createdTime: new Date('2020-09-17T09:52:39.000Z'),
        closedTime: null,
        status: 1,
        milestoneIdx: 1,
      },
      {
        idx: 2,
        author: 2,
        title: 'React Template 만들기',
        content: 'React Generator 쓰지 마세요 ㅠㅠ',
        createdTime: new Date('2020-09-22T09:52:39.000Z'),
        closedTime: new Date('2020-09-23T09:52:39.000Z'),
        status: 0,
        milestoneIdx: 1,
      },
      {
        idx: 3,
        author: 4,
        title: '이슈 리스트 페이지',
        content: '이슈 리스트 페이지 만들기',
        createdTime: new Date('2020-09-23T09:52:39.000Z'),
        closedTime: null,
        status: 1,
      },
      {
        idx: 4,
        author: 3,
        title: '마일스톤 페이지 만들기',
        content: '마일스톤 페이지 만들어야 됩니다',
        createdTime: new Date('2020-09-24T09:52:39.000Z'),
        closedTime: null,
        status: 1,
        milestoneIdx: 1,
      },
      {
        idx: 5,
        author: 4,
        title: '라벨 페이지',
        content: '라벨 페이지 만들어야 합니다.',
        createdTime: new Date('2020-09-01T09:52:39.000Z'),
        closedTime: null,
        status: 1,
        milestoneIdx: 2,
      },
      {
        idx: 6,
        author: 2,
        title: 'axios 객체 만들기',
        content: 'axios가 token을 localStorage에서 가져와야합니다.',
        createdTime: new Date('2020-09-24T09:52:39.000Z'),
        closedTime: null,
        status: 1,
      },
      {
        idx: 7,
        author: 3,
        title: 'issueList Model 추가',
        content: 'iissueList Model 만들기, content 빼고 다 가지고있어야합니다.',
        createdTime: new Date('2020-09-28T09:52:39.000Z'),
        closedTime: null,
        status: 1,
        milestoneIdx: 1,
      },
      {
        idx: 8,
        author: 4,
        title: '사이드바 연동',
        content: '사이드바 데이터랑 연동해야합니다.',
        createdTime: new Date('2020-09-25T09:52:39.000Z'),
        closedTime: null,
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
        userIdx: 3,
        issueIdx: 3,
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
        content: '템플릿 없이 하기 힘드네요ㅠㅠ',
        createdTime: new Date('2020-10-01T09:52:39.000Z'),
      },
      {
        idx: 2,
        author: 3,
        issueIdx: 1,
        content: 'API, Controller, Service, Model 계층으로 가시죠',
        createdTime: new Date('2020-10-02T09:52:39.000Z'),
      },
      {
        idx: 3,
        author: 4,
        issueIdx: 2,
        content: 'React 처음인데 어려워요 ㅠㅠ',
        createdTime: new Date('2020-10-05T09:52:39.000Z'),
      },
      {
        idx: 4,
        author: 4,
        issueIdx: 3,
        content: 'dummy data는 어떻게 할까요?',
        createdTime: new Date('2020-10-07T09:52:39.000Z'),
      },
      {
        idx: 5,
        author: 1,
        issueIdx: 4,
        content: '라벨 랜덤 색깔 버튼까지!',
        createdTime: new Date('2020-10-10T09:52:39.000Z'),
      },
      {
        idx: 6,
        author: 2,
        issueIdx: 5,
        content: '색상 값 바꾸기 기능 중요합니다',
        createdTime: new Date('2020-10-11T09:52:39.000Z'),
      },
      {
        idx: 7,
        author: 4,
        issueIdx: 6,
        content: '제가 만들겠습니다',
        createdTime: new Date('2020-10-12T09:52:39.000Z'),
      },
      {
        idx: 8,
        author: 4,
        issueIdx: 1,
        content: '잘 부탁 드립니다',
        createdTime: new Date('2020-10-14T09:52:39.000Z'),
      },
      {
        idx: 9,
        author: 3,
        issueIdx: 1,
        content: '그건 이미 만들어 두었습니다.',
        createdTime: new Date('2020-10-17T09:52:39.000Z'),
      },
      {
        idx: 10,
        author: 4,
        issueIdx: 2,
        content: '리액트 너무 어려워요',
        createdTime: new Date('2020-10-19T09:52:39.000Z'),
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
