import reducer, { initialState } from './reducer';

test('initial data is sent when state is null', () => {
  expect(reducer(undefined, {})).toBe(initialState);
});
