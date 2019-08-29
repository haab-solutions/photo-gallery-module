import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import '../../app.css';
import CSSModules from 'react-css-modules';
// import styles from './app.css';
import axios from 'axios';
import Modal from './Modal.jsx';

class App extends Component {
  constructor(props) {
  super(props);
  this.state  = {
    photos: this.props.photos,
    toggleModal: false
  }
  this.onClick.bind(this)

  this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState({toggleModal: !this.state.toggleModal})
  }

  render() {
    return (
      <div>
        {this.state.toggleModal ? <Modal description={this.props.description} photos={this.state.photos} onClick={this.onClick}/> : (
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
              <button onClick={this.onClick}>
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

export default App;
// export default CSSModules(App, styles);