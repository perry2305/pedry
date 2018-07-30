
import { fromJS } from 'immutable';
import welcometothenewpageReducer from '../reducer';

describe('welcometothenewpageReducer', () => {
  it('returns the initial state', () => {
    expect(welcometothenewpageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
