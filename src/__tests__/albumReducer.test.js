import reducer from '../Reducers/RootReducer';
import expect from 'expect';

const initialState = {
    albumData: [],
    photolistObject: [],
    loader: false,
    albumMessage: "INITIAL",
    photoListMessage: "INITIAL",
    picSource: "",
    showPhoto: false,
    selectedAlbum: [],
    selectedPhoto: []
};

/** Testing the state data in Reducer */
describe('post reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
});