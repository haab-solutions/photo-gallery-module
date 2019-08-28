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
          <button>
            <svg viewBox="0 0 24 24" styleName='svg'>
            <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fill-rule="evenodd"></path>
            </svg>
          </button>
          <div styleName='carousel'>
            {this.props.photos.map((photo, index) => <div key={index} styleName='card'><img src={photo['src']}/></div>)}
          </div>
          <div styleName='description'>
            Description
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(Modal, styles);