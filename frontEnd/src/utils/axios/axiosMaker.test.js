import axiosMaker from './axiosMaker';
import {rest} from 'msw';
import server from '../../setUpTest';
describe('axiosMaker', () => {
  beforeEach(() => {
    server.use(
      rest.get('/error401', (req, res, ctx) => {
        return res.once(
          ctx.status(401),
          ctx.json({
            message: '401error',
          }),
        );
      }),
    );
    server.use(
      rest.get('/wellDone', (req, res, ctx) => {
        return res.once(
          ctx.status(200),
          ctx.json({
            message: 'you WellDone',
          }),
        );
      }),
    );
  });
  test('401 에러를 받을 시 localStorage에서 쿠키를 지우고 홈으로 리다이렉트를 호출한다.', async () => {
    const axiosInstance = axiosMaker();
    try {
      window.location.assign('/fakeLocation');
      await axiosInstance.get('/error401');
      expect(1).toBe(2);
    } catch (e) {
      expect(null).toBe(window.localStorage.getItem('token'));
    }
  });
  test('401 에러를 만나지 않으면 일반적으로 수행한다.', async () => {
    try {
      const axiosInstance = axiosMaker();
      const result = await axiosInstance.get('/wellDone');
      expect(result.status).toBe(200);
      expect(result.data.message).toBe('you WellDone');
    } catch (e) {
      console.error(e);
      expect(1).toBe(2);
    }
  });
});
