import * as ActionType from "../Common/ActionTypes";
import { store } from "../AppStore/store";
import { serviceUrl } from "../Common/UrlConfig";
const axios = require("axios");

export const loadAlbum = () => {
    axios({
        method: "get",
        url: serviceUrl.albums,
        responseType: "json"
    })
        .then(function (response) {
            store.dispatch({
                type: ActionType.INITIAL_LOAD,
                albumData: response.data,
                albumMessage: 'SUCCESS'
            });
        })
        .catch(error => {
            store.dispatch({
                type: ActionType.INITIAL_LOAD,
                albumData: [],
                albumMessage: error
            });
        });
};

export const loadPhotos = (album) => {
    axios({
        method: "get",
        url: serviceUrl.photos,
        responseType: "json"
    })
        .then(function (response) {
            store.dispatch({
                type: ActionType.ON_CLICK_ALBUM,
                photoListData: response.data,
                payLoad: album,
                photoListMessage: 'SUCCESS'
            });
        })
        .catch(error => {
            store.dispatch({
                type: ActionType.ON_CLICK_ALBUM,
                photoListData: [],
                payLoad: album,
                photoListMessage: error
            });
        });
};

export const backToAlbumAction = () => {
    store.dispatch({
        type: ActionType.BACK_TO_ALBUM,
        payload: true
    });
};

export const showPhotoAction = (photoObj) => {
    store.dispatch({
        type: ActionType.ON_CLICK_PHOTO,
        photoSource: photoObj
    });
};

export const backToPhotoList = () => {
    store.dispatch({
        type: ActionType.BACK_TO_PHOTO_LIST,
        payload: true
    });
}
