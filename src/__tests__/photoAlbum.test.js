import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import PhotoAlbum from '../Components/PhotoAlbum'
import configureStore from 'redux-mock-store'

// create any initial state needed
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
let wrapper;
let store;
const props = {
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
}
beforeEach(() => {  //creates the store with any initial state or middleware needed  
    store = mockStore(initialState)
    wrapper = shallow(<PhotoAlbum store={store} {...props} />)
})

/** Test Photo Album Component renders without crashing  */
describe('PhotoAlbum', () => {
    it('renders without crashing given the required props', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})
