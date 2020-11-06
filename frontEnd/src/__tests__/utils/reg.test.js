describe('', () => {
  const regTemplate = /(is:\w+)|(author:\w+)|(label:\w+)|(milestone:\w+)|(assignee:\w+)/g;
  test('author', () => {
    const authorReg = /(author:\w+)/g;
    const testString =
      'is:open author:babo 너를 고장내주마 label:backend milestone:filter assignee:good';
    const result = testString.match(authorReg);
    expect(result[0]).toBe('author:babo');
  });
  test('is', () => {
    const isReg = /(is:\w+)/g;
    const testString =
      'is:open author:babo 너를 고장내주마 label:backend milestone:filter assignee:good';
    const result = testString.match(isReg);
    expect(result[0]).toBe('is:open');
  });
  test('label', () => {
    const LabelReg = /(label:\w+)/g;
    const testString =
      'is:open author:babo 너를 고장내주마 label:backend milestone:filter assignee:good';
    const result = testString.match(LabelReg);
    expect(result[0]).toBe('label:backend');
  });
  test('milestones', () => {
    const milestoneReg = /(milestone:\w+)/g;
    const testString =
      'is:open author:babo 너를 고장내주마 label:backend milestone:filter assignee:good';
    const result = testString.match(milestoneReg);
    expect(result[0]).toBe('milestone:filter');
  });
});
