import * as ActionType from "../Common/ActionTypes";
import { store } from "../AppStore/store";
import { serviceUrl } from "../Common/UrlConfig";
const axios = require("axios");

/** Action to load the initial Album data */
export const loadAlbum = () => {
  axios({
    method: "get",
    url: serviceUrl.albums,
    responseType: "json"
  })
    .then(function(response) {
      store.dispatch({
        type: ActionType.INITIAL_LOAD,
        albumData: response.data,
        albumMessage: "SUCCESS"
      });
      store.dispatch({
        type: ActionType.SHOW_LOADER,
        showLoader: false
      });
    })
    .catch(error => {
      store.dispatch({
        type: ActionType.INITIAL_LOAD,
        albumData: [],
        albumMessage: error
      });
      store.dispatch({
        type: ActionType.SHOW_LOADER,
        showLoader: false
      });
    });
};

/** Action to load the Photos on click of respective album */
export const loadPhotos = album => {
  store.dispatch({
    type: ActionType.SHOW_LOADER,
    showLoader: true
  });
  axios({
    method: "get",
    url: serviceUrl.photos,
    responseType: "json"
  })
    .then(function(response) {
      store.dispatch({
        type: ActionType.ON_CLICK_ALBUM,
        photoListData: response.data,
        payLoad: album,
        photoListMessage: "SUCCESS"
      });
      store.dispatch({
        type: ActionType.SHOW_LOADER,
        showLoader: false
      });
    })
    .catch(error => {
      store.dispatch({
        type: ActionType.ON_CLICK_ALBUM,
        photoListData: [],
        payLoad: album,
        photoListMessage: error
      });
      store.dispatch({
        type: ActionType.SHOW_LOADER,
        showLoader: false
      });
    });
};

/** Action to Navigate back to Album */
export const backToAlbumAction = () => {
  return {
    type: ActionType.BACK_TO_ALBUM,
    payload: true
  };
};

/** Action to Show Original Photo on click of thumbnail from photo list */
export const showPhotoAction = photoObj => {
  return {
    type: ActionType.ON_CLICK_PHOTO,
    photoSource: photoObj
  };
};

/** Action to Navigate back to Photo List */
export const backToPhotoList = () => {
  return {
    type: ActionType.BACK_TO_PHOTO_LIST,
    payload: true
  };
};
