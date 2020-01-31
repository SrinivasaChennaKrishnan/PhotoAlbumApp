import React from "react";
import Classes from "./Styles/CommonStyle.module.css";
import * as Layout from "react-bootstrap";
import * as Action from "../Actions/AlbumAction";

const backToAlbum = () => {
  Action.backToAlbumAction();
};

const showPhoto = photoObj => {
  Action.showPhotoAction(photoObj);
};

function ViewAlbum(props) {
  let photolistObject =
    ((props.propData || {}).albumlist || {}).photolistObject || [];
  let selectedAlbum =
    ((props.propData || {}).albumlist || {}).selectedAlbum || [];
  let albumTitle = (selectedAlbum || []).title || null;
  return (
    <div className={Classes.center}>
      <Layout.Container className={Classes.containerOutline}>
        <Layout.Row className={Classes.backToAlbumRow}>
          <p
            className={Classes.backToAlbum}
            onClick={() => {
              backToAlbum();
            }}
          >
            {" << Back to Albums"}
          </p>
        </Layout.Row>
        <Layout.Row className={Classes.photoHeadRow}>
          <p className={Classes.albumHeading}>Photo Gallery</p>
        </Layout.Row>
        <Layout.Row>
          <p className={Classes.ml20}>
            <span className={Classes.albumDescription}>
              Showing{" "}
              <span className={Classes.bold}>{photolistObject.length}</span>{" "}
              Photos from the Album{" "}
            </span>{" "}
            <span className={Classes.albumDescriptionAlbumName}>
              {albumTitle}
            </span>
          </p>
        </Layout.Row>
        <Layout.Container className={Classes.albumOutline}>
          <Layout.Row>
            {photolistObject &&
              photolistObject.length > 0 &&
              photolistObject.map((photo, index) => {
                return (
                  <Layout.Col xs lg="2" key={index}>
                    <div
                      key={index}
                      className={Classes.hvrGrow}
                      onClick={() => {
                        showPhoto(photo);
                      }}
                    >
                      <img
                        src={photo.thumbnailUrl}
                        alt={"album" + photo.id}
                        className={Classes.albumImage}
                      />
                      <p className={Classes.albumTitle}>{photo.title}</p>
                    </div>
                  </Layout.Col>
                );
              })}
          </Layout.Row>
        </Layout.Container>
      </Layout.Container>
    </div>
  );
}

export default ViewAlbum;
