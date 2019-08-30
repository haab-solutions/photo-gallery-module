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
    this.setState({photoId: this.state.photoId - 1}, console.log(this.state.photoId))
  }

  nextClick() {
    this.setState({photoId: this.state.photoId + 1}, console.log(this.state.photoId))

  }

  render() {
    console.log(this.props.description)
    const { property_description } = this.props.description
    return (
      <div styleName="modal">
        <div styleName="portrait">
          <div styleName="portrait-button-container">
            <button data-test="prevPhoto" styleName="prevPhoto" onClick={this.prevClick}>
              <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" styleName="prevPhoto-svg"><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path></svg>
            </button>
            <button data-test="nextPhoto" styleName="nextPhoto" onClick={this.nextClick}><svg viewBox="0 0 18 18" styleName="nextPhoto-svg"><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path></svg></button>
          </div>
          <div styleName="main"><img styleName="main-img" src={this.props.photos[0]['src']}/></div>
        </div>
        <div styleName="gallery">
          <div styleName="button-container">
            <button data-test="hide-modal"  styleName="hide-modal" onClick={this.props.onClick}>
              <svg viewBox="0 0 24 24" styleName="hide-modal-svg">
              <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div styleName='carousel'>
            {this.props.photos.map((photo, index) => <div key={index} styleName='card'><img src={photo['src']}/></div>)}
          </div>
          <div data-test="description" styleName='description'>
            {property_description}
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(Modal, styles);