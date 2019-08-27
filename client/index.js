import React from 'react';
import ReactDom from 'react-dom';
import App from './src/components/App.jsx';
import axios from 'axios'

// TODO: Get property id from url item id instead of hardcode
axios.get('/api/photos/1')
      .then((response) => {
        ReactDom.render(<App photos = {response.data[1]}/>, document.getElementById('app'))
      })



