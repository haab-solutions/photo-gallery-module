import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './modal.css';
import img1 from '../../data/1.jpg';
import img2 from '../../data/2.jpg';
import img3 from '../../data/3.jpg';
import img4 from '../../data/4.jpg';
import img5 from '../../data/5.jpg';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoId: 1,
      photos: [img1, img2, img3, img4, img5]
    }
    this.prevClick = this.prevClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
  }

  prevClick() {
    this.setState({photoId: this.state.photoId - 1})
  }

  nextClick() {
    this.setState({photoId: this.state.photoId + 1})
  }

  render() {
    return (
      <div styleName='modal'>
        <div styleName='portrait'>
        {/* <img src={img1}/> */}
        </div>
        <div styleName='gallery'>
          <div>
            {this.state.photos.map((photo, index) => <div key={index} styleName='card'><img src={photo}/></div>)}
          </div>
          <div>
            Description
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(Modal, styles);