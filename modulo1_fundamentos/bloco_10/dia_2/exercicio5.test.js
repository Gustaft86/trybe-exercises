beforeEach(() => console.log('fora', '1 - beforeEach'));
afterEach(() => console.log('fora', '1 - afterEach'));

test('', () => console.log('fora test', '1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('dentro', '2 - beforeEach'));
  afterEach(() => console.log('dentro', '2 - afterEach'));

  test('', () => console.log('dentro test', '2 - test'));
});