import * as ActionType from '../Common/ActionTypes';

export const loadAlbum = () => {
    store.dispatch({type: ActionType.INITIAL_LOAD, albumData:[]})
}

export const loadPhotos = () => {
    store.dispatch({type: ActionType.ON_CLICK_ALBUM, albumData:[]})
}

export const showPhoto = () => {
    store.dispatch({type: ActionType.ON_CLICK_PHOTO, albumData:[]})
}