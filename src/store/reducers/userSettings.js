import * as actionTypes from '../actions/actionTypes';

const initialState = {
    metric: true,
    darkTheme: false

}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.CHANGE_TEMP:
            return {
                ...state,
                metric: !state.metric
            };
        case actionTypes.CHANGE_THEME:
            return {
                ...state,
                darkTheme: !state.darkTheme
            }
        default: return state
    };
};

export default reducer;