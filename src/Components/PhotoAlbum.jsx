import React, { lazy } from "react";
import Classes from "./Styles/CommonStyle.module.css";
import * as Layout from "react-bootstrap";
import { loadAlbum, loadPhotos } from "../Actions/AlbumAction";
import { connect } from "react-redux";
import albumImage from "../Common/Images/albumImg.png";

const ViewAlbum = lazy(() => import("./ViewAlbum"));
const ViewPhoto = lazy(() => import("./ViewPhoto"));

class PhotoAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    loadAlbum();
  }
  onClickAlbum = album => {
    loadPhotos(album);
  };
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
    return (
      <div className={Classes.center}>
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
                          <p className={Classes.albumTitle}>{album.title}</p>
                        </div>
                      </Layout.Col>
                    );
                  })}
              </Layout.Row>
            </Layout.Container>
          </Layout.Container>
        )}
        {isShowPhotos && <ViewAlbum propData={propData} />}
        {showPhoto && <ViewPhoto propData={propData} />}
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
