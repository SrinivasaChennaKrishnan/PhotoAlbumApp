import * as Actions from '../Actions/AlbumAction'
import * as ActionTypes from '../Common/ActionTypes'
import configureStore from 'redux-mock-store'
jest.unmock('axios');
import axios from "axios";
import * as mockData from "../Common/mockData";
import MockAdapter from 'axios-mock-adapter';

const initialState = {
    albumData: [],
    photolistObject: [],
    loader: false,
    albumMessage: "INITIAL",
    photoListMessage: "INITIAL",
    picSource: "",
    showPhoto: false,
    selectedAlbum: [],
    selectedPhoto: [],
    dispatch: jest.fn()
};

// here it is possible to pass in any middleware if needed into //configureStore
const mockStore = configureStore();
let store;
beforeEach(() => {
    //creates the store with any initial state or middleware needed  
    store = mockStore(initialState)
    store.clearActions();
})

/* testing the Actions in Photo Album */
describe('Actions in Photo Album', () => {
    // Action on click of Back to Album Link
    test('Dispatches the correct action and payload for backToAlbumAction', () => {
        let backToAlbum = true
        const expectedActions = [
            {
                'type': ActionTypes.BACK_TO_ALBUM,
                'payload': backToAlbum
            }
        ];
        store.dispatch(Actions.backToAlbumAction(backToAlbum));
        expect(store.getActions()).toEqual(expectedActions);
    });

    // Action on click of Photo listed in Album
    test('Dispatches the correct action and payload for showPhotoAction', () => {
        let selectedPhoto = []
        const expectedActions = [
            {
                'type': ActionTypes.ON_CLICK_PHOTO,
                'photoSource': selectedPhoto
            }
        ];
        store.dispatch(Actions.showPhotoAction(selectedPhoto));
        expect(store.getActions()).toEqual(expectedActions);
    });

    // Action on click of Back To Photos Link
    test('Dispatches the correct action and payload for backToPhotoList', () => {
        let backToPhoto = true
        const expectedActions = [
            {
                'type': ActionTypes.BACK_TO_PHOTO_LIST,
                'payload': backToPhoto
            }
        ];
        store.dispatch(Actions.backToPhotoList(backToPhoto));
        expect(store.getActions()).toEqual(expectedActions);
    });

    // Action for loading initial Album Data with Success Response
    it("fetches data from loadAlbums", () => {
        var mock = new MockAdapter(axios);
        const data = mockData.albumData;
        mock.onGet('http://jsonplaceholder.typicode.com/albums').reply(200, data);

        Actions.loadAlbum(response => {
            expect(response.data).toEqual(data);
            done();
        });
    });

    // Action for loading initial Album Data with Error Response
    it("Returns error on fetching data from loadAlbums", () => {
        var mock = new MockAdapter(axios);
        const error = 'error';
        mock.onGet('http://jsonplaceholder.typicode.com/albums').reply(403, error);

        Actions.loadAlbum(error => {
            expect(error).toEqual('Invalid Access Token');
            done();
        });
    });

    // Action for loading Photos List on Click of Album with Success Response
    it("fetches data from loadPhotos", () => {
        var mock = new MockAdapter(axios);
        const data = mockData.photosData;
        mock.onGet('http://jsonplaceholder.typicode.com/photos').reply(200, data);

        Actions.loadPhotos(response => {
            expect(response.data).toEqual(data);
            done();
        });
    });

    // Action for loading Photos List on Click of Album with Error Response
    it("Returns error on fetching data from loadPhotos", () => {
        var mock = new MockAdapter(axios);
        const error = 'error';
        mock.onGet('http://jsonplaceholder.typicode.com/photos').reply(403, error);

        Actions.loadPhotos(error => {
            expect(error).toEqual('Invalid Access Token');
            done();
        });
    });
    
})