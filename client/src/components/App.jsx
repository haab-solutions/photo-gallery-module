import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../app.css';

class App extends Component {
  constructor(props) {
  super(props);
  }

  render() {
    return (
      <div>
        <div className="photoContainer">
          <div className="mainColumn">Photo1</div>
          <div className="subColumn">
            <div>Photo2</div>
            <div>Photo3</div>
          </div>
          <div className="subColumn">
            <div>Photo4</div>
            <div>Photo5</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;