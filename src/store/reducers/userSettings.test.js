import reducer from './userSettings';

describe('userSettings reducer', () => {
    const initialState  = {
        metric: true,
        darkTheme: false
    };

    it('Should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
});