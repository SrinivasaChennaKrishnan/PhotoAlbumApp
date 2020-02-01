import React, { lazy } from "react";
import Classes from "./Styles/CommonStyle.module.css";
import * as Layout from "react-bootstrap";
import { loadAlbum, loadPhotos } from "../Actions/AlbumAction";
import { connect } from "react-redux";
import albumImage from "../Common/Images/albumImg.png";
import loaderGif from "../Common/Images/photo-loader.gif";
import { store } from "../AppStore/store";
import * as ActionType from "../Common/ActionTypes";

/** dynamic import of the child components */
const ViewAlbum = lazy(() => import("./ViewAlbum"));
const ViewPhoto = lazy(() => import("./ViewPhoto"));

class PhotoAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }

  /** loading the album data */
  componentDidMount() {
    loadAlbum();
    store.dispatch({
      type: ActionType.SHOW_LOADER,
      showLoader: true
    });
  }

  /** Function to load Photos on Click of Album */
  onClickAlbum = album => {
    loadPhotos(album);
  };

  /** Function to Render the Parent component along with the child components */
  render() {
    let isShowAlbums =
      ((this.props.albumlist || {}).albumMessage || "") === "SUCCESS"
        ? true
        : false;
    let isShowPhotos =
      ((this.props.albumlist || {}).photoListMessage || "") === "SUCCESS"
        ? true
        : false;
    let showPhoto =
      ((this.props.albumlist || {}).showPhoto || "") === true ? true : false;
    let albumData = (this.props.albumlist || {}).albumData || [];
    let propData = this.props;
    let isLoading = (this.props.albumlist || {}).loader;
    return (
      <div className={Classes.center}>
        {/* Show Loader till getting the Data */}
        {isLoading && (
          <Layout.Container className={Classes.containerOutline}>
            <div className={Classes.loaderDiv}>
              <p className={Classes.albumDescriptionAlbumName}>
                {"Please wait while loading Gallery . . . "}
              </p>
              <img
                src={loaderGif}
                className={Classes.loaderClass}
                alt="loader"
              />
            </div>
          </Layout.Container>
        )}
        {/* Stop Loader once the data received */}
        {!isLoading && (
          <div>
            {/* Showing List of Albums if the isShowAlbums flag from state is true */}
            {isShowAlbums && (
              <Layout.Container className={Classes.containerOutline}>
                <Layout.Row className={Classes.albumHeadRow}>
                  <p className={Classes.albumHeading}>Albums</p>
                </Layout.Row>
                <Layout.Container className={Classes.albumOutline}>
                  <Layout.Row>
                    {albumData &&
                      albumData.length > 0 &&
                      albumData.map((album, index) => {
                        return (
                          <Layout.Col xs lg="2" key={index}>
                            <div
                              className={Classes.albumGrid}
                              onClick={() => {
                                this.onClickAlbum(album);
                              }}
                            >
                              <img
                                src={albumImage}
                                alt={"album" + album.id}
                                className={Classes.albumImage}
                              />
                              <p className={Classes.albumTitle}>
                                {album.title}
                              </p>
                            </div>
                          </Layout.Col>
                        );
                      })}
                  </Layout.Row>
                </Layout.Container>
              </Layout.Container>
            )}
            {/* Showing List of Photos if the isShowPhotos flag from state is true */}
            {isShowPhotos && <ViewAlbum propData={propData} />}
            {/* Showing the Required full size image if the showPhoto flag from state is true */}
            {showPhoto && <ViewPhoto propData={propData} />}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    albumlist: state
  };
};

export default connect(mapStateToProps)(PhotoAlbum);
