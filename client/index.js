import React from 'react';
import ReactDom from 'react-dom';
import App from './src/components/App.jsx';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


// TODO: Get property id from url item id instead of hardcode

ReactDom.render(<Router><Route path="/listing/:id" component={App}/></Router>, document.getElementById('app'))




