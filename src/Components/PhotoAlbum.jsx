import React, { lazy } from 'react'
import Classes from './Styles/CommonStyle.module.css'
import * as Layout from 'react-bootstrap'
import { loadAlbum, loadPhotos } from '../Actions/AlbumAction'
import { connect } from 'react-redux';
import albumImage from '../Common/Images/albumImg.png'


const ViewAlbum = lazy(() => import('./ViewAlbum'));
const ViewPhoto = lazy(() => import('./ViewPhoto'));

class PhotoAlbum extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  componentWillMount(){
    loadAlbum()
  }
  onClickAlbum = (albumId)=>{
    loadPhotos(albumId)
  }
  render(){
    let isFirstPage = ((this.props.albumlist || {}).albumMessage || '') === 'SUCCESS' ? true : false
    let isShowAlbum = ((this.props.albumlist || {}).photoListMessage || '') === 'SUCCESS' ? true : false;
    let isPhotos = false;
    let albumData = ((this.props.albumlist || {}).albumData || []);
    let propData = this.props;
    return (
      <div className={Classes.center}>
      {isFirstPage && <Layout.Container>
        <Layout.Row>
          <p className={Classes.albumHeading}>Album</p>
        </Layout.Row>
      <Layout.Container className={Classes.containerOutline}>
        <Layout.Row>
          {albumData && albumData.length > 0 && albumData.map((album, index)=>{
            return(
              <Layout.Col xs lg = "2" key={index}>
              <div className={Classes.albumGrid} onClick={()=>{this.onClickAlbum(album.id)}}>
              <img src={albumImage} alt={"album"+album.id} className={Classes.albumImage}/>
              <p className={Classes.albumTitle}>{album.title}</p>
              </div>
              </Layout.Col>
            )
          })}
        </Layout.Row>
        </Layout.Container>
      </Layout.Container>}
      {isShowAlbum && <ViewAlbum propData={propData}/>}
      {isPhotos && <ViewPhoto />}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    albumlist: state
  }
}

export default connect (mapStateToProps)(PhotoAlbum);
