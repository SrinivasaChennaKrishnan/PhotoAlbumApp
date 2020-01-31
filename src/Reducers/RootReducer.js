import * as ActionType from "../Common/ActionTypes";

const initialState = {
  albumData: [],
  photolistObject: [],
  loader: false,
  albumMessage: "INITIAL",
  photoListMessage: "INITIAL",
  picSource: "",
  showPhoto: false,
  selectedAlbum: [],
  selectedPhoto: []
};

export default function RootReducer(state = initialState, action) {
  switch (action.type) {
    /* Initial load data */
    case ActionType.INITIAL_LOAD:
      let albumData = action.albumData;
      let albumMessage = action.albumMessage;
      state.albumData = albumData;
      state.albumMessage = albumMessage;
      state.photoListMessage = "INITIAL";
      state.showPhoto = false;
      state.picSource = "";
      return { ...state };
    /* data on click of album */
    case ActionType.ON_CLICK_ALBUM:
      let photoListArray = [];
      let photolistResponse = action.photoListData;
      let albumId = (action.payLoad || {}).id || null;
      let photoListMessage = action.photoListMessage;
      state.selectedAlbum = action.payLoad;
      state.albumMessage = "INITIAL";
      state.showPhoto = false;
      state.picSource = "";
      for (let i = 0; i < photolistResponse.length; i++) {
        if (photolistResponse[i].albumId === albumId) {
          photoListArray.push(photolistResponse[i]);
        }
      }
      state.photolistObject = photoListArray;
      state.photoListMessage = photoListMessage;
      return { ...state };
    /* data on click of back to album link */
    case ActionType.BACK_TO_ALBUM:
      state.photoListMessage = "INITIAL";
      state.albumMessage = "SUCCESS";
      state.showPhoto = false;
      state.picSource = "";
      return { ...state };
    /* data on click of photo */
    case ActionType.ON_CLICK_PHOTO:
      state.showPhoto = true;
      state.photoListMessage = "INITIAL";
      state.albumMessage = "INITIAL";
      state.picSource = (action.photoSource || {}).url || "";
      state.selectedPhoto = action.photoSource;
      return { ...state };
    /* data on click of back to photos link */
    case ActionType.BACK_TO_PHOTO_LIST:
      state.photoListMessage = "SUCCESS";
      state.albumMessage = "INITIAL";
      state.showPhoto = false;
      state.picSource = "";
      state.selectedPhoto = [];
      return { ...state };
    /* Default */
    default:
      return { ...state };
  }
}
