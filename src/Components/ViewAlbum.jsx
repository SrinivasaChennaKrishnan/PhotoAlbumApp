import React from 'react';
import Classes from './Styles/CommonStyle.module.css';
import * as Layout from 'react-bootstrap'
import albumImage from '../Common/Images/albumImg.png'

function ViewAlbum(props) {
    let photolistObject = ((props.propData || {}).albumlist || {}).photolistObject || []
  return (
    <div className={Classes.center}>
        <Layout.Container>
        <Layout.Row>
          <p className={Classes.albumHeading}>Album List</p>
        </Layout.Row>
      <Layout.Container className={Classes.containerOutline}>
        <Layout.Row>
          {photolistObject && photolistObject.length > 0 && photolistObject.map((photo, index)=>{
            return(
              <Layout.Col xs lg = "2" key={index}>
              <div key={index} className={Classes.albumGrid}>
              <img src={photo.thumbnailUrl} alt={"album"+photo.id} className={Classes.albumImage}/>
              <p className={Classes.albumTitle}>{photo.title}</p>
              </div>
              </Layout.Col>
            )
          })}
        </Layout.Row>
        </Layout.Container>
      </Layout.Container>
    </div>
  );
}

export default ViewAlbum;
