import splitTextAndImageInText from '~/*/utils/splitTextAndImageInText';

describe('문자 속에서 문자 - 이미지 축출하는 함수 테스트', () => {
  test('reg를 한번 테스트 해볼 예정입니다.', () => {
    const reg = /!\{\([^)}]*\)\}/g;
    const sampleText =
    '!{(startImage)} 안녕하세요 ㅎㅎ !{(Image)} 테스트용 이미지 입니다. !{(great)} 5개가 나와야 합니다.';
    const splitted = sampleText.split(reg);
    expect(splitted.length).toBe(4);
  });
  test('splitTextAndImageInText를 구동해보자', () => {
    const sampleText =
      '!{(startImage)} 안녕하세요 ㅎㅎ !{(Image)} 테스트용 이미지 입니다. !{(great)} 5개가 나와야 합니다.';

    const result = splitTextAndImageInText(sampleText);
    expect(result.length).toBe(7);
  });
});