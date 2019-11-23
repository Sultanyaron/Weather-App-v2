import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/updateObject';

const initialState = {
  metric: true,
  darkTheme: false// Not in use atm -  Ready to be implemented
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TEMP:
      return updateObject(state, { metric: !state.metric });
    case actionTypes.CHANGE_THEME:
      return updateObject(state, { darkTheme: !state.darkTheme });
    default: return state;
  }
};

export default reducer;