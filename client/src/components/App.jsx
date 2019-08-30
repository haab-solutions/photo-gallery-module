import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './app.css';
import axios from 'axios';
import Modal from './Modal.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      photos: this.props.photos,
      toggleModal: false
    }
    this.onClick = this.onClick.bind(this);
    this.dimOtherImgs = this.dimOtherImgs.bind(this);
    this.undimOtherImgs = this.undimOtherImgs.bind(this);
  }

  onClick(){
    this.setState({toggleModal: !this.state.toggleModal})
  }

  dimOtherImgs(e){
    const imgs = document.getElementsByClassName("photo");
    for (let i = 0; i < imgs.length; i++){
      if(imgs[i] !== e.target){
        imgs[i].style.filter = 'brightness(75%)'
      }
    }
  }

  undimOtherImgs(){
    const imgs = document.getElementsByClassName("photo");
    for (let i = 0; i < imgs.length; i++){
      if(imgs[i].style.filter = 'brightness(75%'){
        imgs[i].style.filter = 'none'
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.toggleModal ? <Modal description={this.props.description} photos={this.state.photos} onClick={this.onClick}/> : (
          <div styleName='main-container'>
          <div styleName='photo-container'>
            <div  styleName="main-column">
              <div>
                <img className="photo" styleName="main-column-img" src={this.state.photos[0]['src']} onMouseEnter={this.dimOtherImgs} onMouseLeave={this.undimOtherImgs} />
              </div>
            </div>
            <div styleName="sub-column">
              <div><img className="photo" styleName="sub-column-img" src={this.state.photos[1]['src']} onMouseEnter={this.dimOtherImgs} onMouseLeave={this.undimOtherImgs}/></div>
              <div><img className="photo" styleName="sub-column-img" src={this.state.photos[2]['src']} onMouseEnter={this.dimOtherImgs} onMouseLeave={this.undimOtherImgs}/></div>
            </div>
            <div styleName="sub-column">
              <div><img className="photo" styleName="sub-column-img" src={this.state.photos[3]['src']} onMouseEnter={this.dimOtherImgs} onMouseLeave={this.undimOtherImgs}/></div>
              <div><img className="photo" styleName="sub-column-img" src={this.state.photos[4]['src']} onMouseEnter={this.dimOtherImgs} onMouseLeave={this.undimOtherImgs}/></div>
            </div>
            <div styleName="share-save">
              <button onClick={this.onClick}>
                <span>
                  <div styleName="share-button-text">
                    <div>
                      <svg styleName="share-svg" viewBox="0 0 24 24" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="2.25" focusable="false" aria-hidden="true" role="presentation" stroke-linecap="round" stroke-linejoin="round"><g fillRule="evenodd"><path d="m11.5 16v-15"></path><path d="m7.5 4 4-3 4 3"></path><path d="m5.4 9.5h-3.9v14h20v-14h-3.1"></path></g></svg>
                    </div>
                    <div>Share</div>
                  </div>
                </span>
              </button>
              <button onClick={this.onClick}>
                <span>
                  <div styleName="save-button-text">
                    <div>
                      <svg styleName="save-svg" viewBox="0 0 24 24" fill="currentColor" fill-opacity="0" stroke="#484848" stroke-width="2.25" focusable="false" aria-label="Save this listing." role="img" stroke-linecap="round" stroke-linejoin="round"><path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" stroke-linejoin="round"></path></svg>
                    </div>
                    <div>Save</div>
                  </div>
                </span>
              </button>
            </div>
            <div styleName="view-photos">
              <button data-test="view-modal" onClick={this.onClick}>
              View Photos
              </button>
            </div>
          </div>
        </div>
        )}
      </div>
    )
  }
}

export default CSSModules(App, styles);