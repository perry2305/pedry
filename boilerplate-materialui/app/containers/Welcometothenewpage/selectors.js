import { createSelector } from 'reselect';

/**
 * Direct selector to the welcometothenewpage state domain
 */
const selectWelcometothenewpageDomain = () => (state) => state.get('welcometothenewpage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Welcometothenewpage
 */

const makeSelectWelcometothenewpage = () => createSelector(
  selectWelcometothenewpageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectWelcometothenewpage;
export {
  selectWelcometothenewpageDomain,
};
