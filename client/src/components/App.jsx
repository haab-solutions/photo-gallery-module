import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import '../../app.css';
import CSSModules from 'react-css-modules';
import styles from './app.css';
import axios from 'axios';
import img1 from '../../data/1.jpg';
import img2 from '../../data/2.jpg';
import img3 from '../../data/3.jpg';
import img4 from '../../data/4.jpg';
import img5 from '../../data/5.jpg';
import Modal from './Modal.jsx'

class App extends Component {
  constructor(props) {
  super(props);

  this.onClick = this.onClick.bind(this);
  }

  // TODO: Get property id from url item id
  // componentDidMount(){
  //   axios.get('/api/photos/1')
  //     .then((response) => console.log(response))
  // }

  onClick(){}

  render() {
    return (
      <div>
      <Modal/>
      <div styleName='main-container'>
        <div styleName='photo-container'>
          <div styleName="main-column"><img src={img1}/></div>
          <div styleName="sub-column">
            <div><img src={img2}/></div>
            <div><img src={img3}/></div>
          </div>
          <div styleName="sub-column">
            <div><img src={img4}/></div>
            <div><img src={img5}/></div>
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