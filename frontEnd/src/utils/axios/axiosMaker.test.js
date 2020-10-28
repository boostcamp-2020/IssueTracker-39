import axiosMaker from './axiosMaker';
import {rest} from 'msw';
import server from '../../setUpTest';
describe('axiosMaker', () => {
  beforeEach(() => {
    server.use(
      rest.get('/error401', (req, res, ctx) => {
        return res(
          ctx.status(401),
          ctx.json({
            message: '401error',
          }),
        );
      }),
    );
  });
  test('401 에러를 받을 시 localStorage에서 쿠키를 지우고 홈으로 리다이렉트를 호출한다.', async () => {
    window.localStorage.token = 'fake';
    expect('fake').toBe(window.localStorage.getItem('token'));

    const axiosInstance = axiosMaker();
    try {
      await axiosInstance.get('/error401');
      expect(1).toBe(2);
    } catch (e) {
      expect(undefined).toBe(window.localStorage.getItem('token'));
      expect('http://localhost/').toBe(window.location.href);
    }
  });
});
