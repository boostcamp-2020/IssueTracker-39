import axiosMaker from './axiosMaker';
import {rest} from 'msw';
describe('axiosMaker', async () => {
  beforeEach(() => {
    rest.get('/error401', (req, res, ctx) => {
      return res.once(
        ctx.status(401),
        ctx.json({
          message: '401error',
        }),
        ctx.delay(100),
      );
    });
  });
  test('401 에러를 받을 시 localStorage에서 쿠키를 지우고 홈으로 리다이렉트를 호출한다.', async () => {
    window.localStorage.token = 'fake';
    expect('fake').toBe(window.localStorage.getItem('token'));

    const axios = axiosMaker();
    const result = await axios.get('/error401');

    expect(undefined).toBe(window.localStorage.getItem('token'));
    expect('http://localhost/').toBe(window.location.href);
  });
});
