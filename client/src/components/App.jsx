import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import '../../app.css';
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
    var imgs = document.getElementsByClassName("photo");
    for (var i = 0; i < imgs.length; i++){
      if(imgs[i] !== e.target){
        imgs[i].style.filter = 'brightness(75%)'
      }
    }
  }

  undimOtherImgs(){
    var imgs = document.getElementsByClassName("photo");
    for (var i = 0; i < imgs.length; i++){
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
            <div  styleName="main-column"><img className="photo" styleName="main-column-img" src={this.state.photos[0]['src']} onMouseEnter={this.dimOtherImgs} onMouseLeave={this.undimOtherImgs} /></div>
            <div styleName="sub-column">
              <div><img className="photo" styleName="sub-column-img" src={this.state.photos[1]['src']} onMouseEnter={this.dimOtherImgs} onMouseLeave={this.undimOtherImgs}/></div>
              <div><img className="photo" styleName="sub-column-img" src={this.state.photos[2]['src']} onMouseEnter={this.dimOtherImgs} onMouseLeave={this.undimOtherImgs}/></div>
            </div>
            <div styleName="sub-column">
              <div><img className="photo" styleName="sub-column-img" src={this.state.photos[3]['src']} onMouseEnter={this.dimOtherImgs} onMouseLeave={this.undimOtherImgs}/></div>
              <div><img className="photo" styleName="sub-column-img" src={this.state.photos[4]['src']} onMouseEnter={this.dimOtherImgs} onMouseLeave={this.undimOtherImgs}/></div>
            </div>
            <div styleName="share-save">
              <button onClick={this.onClick}>Share</button>
              <button onClick={this.onClick}>Save</button>
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

// export default App;
export default CSSModules(App, styles);