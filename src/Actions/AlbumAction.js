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
    .then(function(response) {
      store.dispatch({
        type: ActionType.INITIAL_LOAD,
        albumData: response.data,
        albumMessage: "SUCCESS"
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

export const loadPhotos = albumId => {
  axios({
    method: "get",
    url: serviceUrl.photos,
    responseType: "json"
  })
    .then(function(response) {
      store.dispatch({
        type: ActionType.ON_CLICK_ALBUM,
        photoListData: response.data,
        payLoad: albumId,
        photoListMessage: "SUCCESS"
      });
    })
    .catch(error => {
      store.dispatch({
        type: ActionType.ON_CLICK_ALBUM,
        photoListData: [],
        payLoad: albumId,
        photoListMessage: error
      });
    });
};

export const showPhoto = () => {
  store.dispatch({ type: ActionType.ON_CLICK_PHOTO, albumData: [] });
};
