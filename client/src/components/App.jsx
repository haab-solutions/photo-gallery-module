import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import '../../app.css';
import CSSModules from 'react-css-modules';
import styles from './app.css';
import axios from 'axios';
<<<<<<< HEAD
=======
import img1 from '../../data/1.jpg';
import img2 from '../../data/2.jpg';
import img3 from '../../data/3.jpg';
import img4 from '../../data/4.jpg';
import img5 from '../../data/5.jpg';
import Modal from './Modal.jsx'
<<<<<<< HEAD
>>>>>>> WIP modal component
=======
>>>>>>> c765cd5f2d97db103c024296ba2f0955f17d0808

class App extends Component {
  constructor(props) {
  super(props);
<<<<<<< HEAD
<<<<<<< HEAD
  this.state  = {
    photos: this.props.photos
=======

  this.onClick = this.onClick.bind(this);
>>>>>>> c765cd5f2d97db103c024296ba2f0955f17d0808
  }
  this.onClick.bind(this)
=======

  this.onClick = this.onClick.bind(this);
>>>>>>> WIP modal component
  }

  onClick(){}

  render() {
    return (
      <div>
      <Modal/>
      <div styleName='main-container'>
        <div styleName='photo-container'>
          <div styleName="main-column"><img src={this.state.photos[0]['src']}/></div>
          <div styleName="sub-column">
            <div><img src={this.state.photos[1]['src']}/></div>
            <div><img src={this.state.photos[2]['src']}/></div>
          </div>
          <div styleName="sub-column">
            <div><img src={this.state.photos[3]['src']}/></div>
            <div><img src={this.state.photos[4]['src']}/></div>
          </div>
          <div styleName="share-save">
            <button onClick={this.onClick}>Share</button>
            <button onClick={this.onClick}>Save</button>
          </div>
          <div styleName="view-photos">
            <button>
            View Photos
            </button>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

// export default App;
export default CSSModules(App, styles);