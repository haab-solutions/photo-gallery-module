import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoId: 1,
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
          <div styleName='main'><img src={this.props.photos[0]['src']}/></div>
        </div>
        <div styleName='gallery'>
          <div styleName='carousel'>
            {this.props.photos.map((photo, index) => <div key={index} styleName='card'><img src={photo['src']}/></div>)}
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