import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ViewAlbum from '../Components/ViewAlbum'

/** Test View Album Component renders without crashing  */
describe('Album', () => {
    it('renders without crashing given the required props', () => {
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
        const wrapper = shallow(<ViewAlbum {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})
