import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

const imagesBookmeetings = [
  '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500',
];

export default class GalleryBookmeetings extends Component {
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
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          See projects
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={imagesBookmeetings[photoIndex]}
            nextSrc={imagesBookmeetings[(photoIndex + 1) % imagesBookmeetings.length]}
            prevSrc={imagesBookmeetings[(photoIndex + imagesBookmeetings.length - 1) % imagesBookmeetings.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + imagesBookmeetings.length - 1) % imagesBookmeetings.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % imagesBookmeetings.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
