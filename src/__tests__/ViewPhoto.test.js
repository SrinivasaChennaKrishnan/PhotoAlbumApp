import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ViewPhoto from '../Components/ViewPhoto'

/** Test View Photo Component renders without crashing  */
describe('ViewPhoto', () => {
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
        const wrapper = shallow(<ViewPhoto {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})
