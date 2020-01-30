import * as ActionType from "../Common/ActionTypes";

const initialState = {
  albumData: [],
  photolistObject: [],
  loader: false,
  albumMessage: "INITIAL",
  photoListMessage: "INITIAL"
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
      return { ...state };
    /* data on click of album */
    case ActionType.ON_CLICK_ALBUM:
      let photoListArray = [];
      let photolistResponse = action.photoListData;
      let albumId = action.payLoad;
      let photoListMessage = action.photoListMessage;
      state.albumMessage = "INITIAL";
      for (let i = 0; i < photolistResponse.length; i++) {
        if (photolistResponse[i].albumId === albumId) {
          photoListArray.push(photolistResponse[i]);
        }
      }
      state.photolistObject = photoListArray;
      state.photoListMessage = photoListMessage;
      return { ...state };
    /* data on click of photo */
    case ActionType.ON_CLICK_PHOTO:
      return { ...state };
    /* Default */
    default:
      return { ...state };
  }
}
