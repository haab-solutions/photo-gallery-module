import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Gallery from './Gallery.jsx';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // description: {},
      photos: [],
    }
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    // http://localhost:3000/api/photos/1
    // http://ec2-13-57-36-74.us-west-1.compute.amazonaws.com:3001/api/photos/${id}
    // for proxy, change to relative path to reference the proxy url.
    axios.get(`/api/photos/${id}`)
      .then((response) => {
      console.log(response.data)
      this.setState({
        // description: response.data[0].property_description,
        photos: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <Gallery description={this.state.description} photos={this.state.photos}/>
      </div>
    )
  }
}

export default App;