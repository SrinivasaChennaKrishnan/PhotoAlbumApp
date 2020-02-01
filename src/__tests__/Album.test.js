import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Album from '../Album'

describe('Album', () => {
  
  /** testing whether the Album component renders without crashing */
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
    const wrapper = shallow(<Album {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})