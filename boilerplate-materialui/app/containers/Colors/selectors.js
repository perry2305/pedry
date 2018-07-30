import { createSelector } from 'reselect';

/**
 * Direct selector to the colors state domain
 */
const selectColorsDomain = () => (state) => state.get('colors');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Colors
 */

const makeSelectColors = () => createSelector(
  selectColorsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectColors;
export {
  selectColorsDomain,
};
