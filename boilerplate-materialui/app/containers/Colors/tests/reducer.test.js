
import { fromJS } from 'immutable';
import colorsReducer from '../reducer';

describe('colorsReducer', () => {
  it('returns the initial state', () => {
    expect(colorsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
