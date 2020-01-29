import * as ActionType from '../Common/ActionTypes'

const initialState = { photoObject: [], loader: false }

export default function RootReducer(state = initialState, action) {
    switch (action.type) {
        /* Initial load data */
        case ActionType.INITIAL_LOAD:
            return { ...state }
        /* data on click of album */
        case ActionType.ON_CLICK_ALBUM:
            return { ...state }
        /* data on click of photo */
        case ActionType.ON_CLICK_PHOTO:
            return { ...state }
        /* Default */
        default:
            return { ...state }
    }
}