import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../app.css';
import img1 from '../../data/1.jpg';
import img2 from '../../data/2.jpg';
import img3 from '../../data/3.jpg';
import img4 from '../../data/4.jpg';
import img5 from '../../data/5.jpg';

class App extends Component {
  constructor(props) {
  super(props);
  }

  render() {
    return (
      <div className="main-container">
        <div className="photo-container">
          <div className="main-column"><img src={img1}/></div>
          <div className="sub-column">
            <div><img src={img2}/></div>
            <div><img src={img3}/></div>
          </div>
          <div className="sub-column">
            <div><img src={img4}/></div>
            <div><img src={img5}/></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;