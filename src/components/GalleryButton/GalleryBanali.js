import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import style from './GalleryElements.css';

const imagesBanali = [
  '//mir-s3-cdn-cf.behance.net/project_modules/max_1200/af7529112363099.6012e4f7102b1.png',
  '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500',
];

export default class GalleryBanali extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <button className='galleryButton' type="button" onClick={() => this.setState({ isOpen: true })}>
          See projects
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={imagesBanali[photoIndex]}
            nextSrc={imagesBanali[(photoIndex + 1) % imagesBanali.length]}
            prevSrc={imagesBanali[(photoIndex + imagesBanali.length - 1) % imagesBanali.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + imagesBanali.length - 1) % imagesBanali.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % imagesBanali.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
