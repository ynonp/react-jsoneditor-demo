import produce from 'immer';
import { actionType } from './actions';

const initialState = {
  data:  {
    'array': [1, 2, 3],
    'boolean': true,
    'null': null,
    'number': 123,
    'object': {'a': 'b', 'c': 'd'},
    'string': 'Hello World'
  }
};

const reducer = produce((state, action) => {
  switch(action.type) {
    case actionType.SET_JSON:
      state.data = action.payload;
      break;
  }
}, initialState);

export default reducer;

