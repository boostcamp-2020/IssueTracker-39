import {rest} from 'msw';
export default rest.get('/api/label/list', (req, res, next) => {
  return res(ctx.json(labelDummyData));
});

export const labelDummyData = [
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
    color: 'lime',
    description: '에러입니다.',
  },
  {
    idx: 5,
    title: 'not Important',
    color: 'lightgray',
    description: '중요하지 않습니다.',
  },
  {
    idx: 6,
    title: 'easy',
    color: 'yellow',
    description: '쉽습니다.',
  },
];
