import {rest} from 'msw';
export const sampleData = [
  {userId: 'boost'},
  {userId: 'hojin5633@gmail.com'},
  {userId: 'lacomaco122@gmail.com'},
  {userId: 'lee.yeonjeong.lee@gmail.com'},
  {userId: 'mon823@naver.com'},
  {userId: 'test'},
];
export default rest.get('/api/author/list', (req, res, ctx) => {
  return res(
    ctx.json(sampleData),
  );
});
