import React from "react";
import Classes from "./Styles/CommonStyle.module.css";
import * as Layout from "react-bootstrap";
import * as Action from "../Actions/AlbumAction";

const backToPhotoList = () => {
  Action.backToPhotoList();
};

function ViewPhoto(props) {
  let picSource = ((props.propData || {}).albumlist || {}).picSource || "";
  let selectedPhoto =
    ((props.propData || {}).albumlist || {}).selectedPhoto || [];
  let photoTitle = (selectedPhoto || []).title || "";
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
              backToPhotoList();
            }}
          >
            {" << Back to Photo Gallery"}
          </p>
        </Layout.Row>
        <Layout.Row>
          <p className={Classes.ml20}>
            <span className={Classes.albumDescription}>
              Showing{" "}
              <span className={Classes.albumDescriptionAlbumName}>
                {photoTitle}
              </span>{" "}
              from the Album{" "}
            </span>{" "}
            <span className={Classes.albumDescriptionAlbumName}>
              {albumTitle}
            </span>
          </p>
        </Layout.Row>
        <Layout.Container className={Classes.albumOutline}>
          <Layout.Row>
            {picSource && picSource !== "" && (
              <Layout.Col>
                <div className={Classes.photoGridDiv}>
                  <img
                    src={picSource}
                    alt={"album"}
                    className={Classes.photoGrid}
                  />
                </div>
              </Layout.Col>
            )}
          </Layout.Row>
        </Layout.Container>
      </Layout.Container>
    </div>
  );
}

export default ViewPhoto;
