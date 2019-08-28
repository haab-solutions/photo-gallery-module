import { shallow, mount, render } from 'enzyme';
import App from '../components/App.jsx';
import React from 'react';

describe('Photo Gallery', () => {
  const photos = [
    {
        "id": 1,
        "src": "https://bnbair.s3-us-west-1.amazonaws.com/2.jpg",
        "propertyListing_id": 1
    },
    {
        "id": 2,
        "src": "https://bnbair.s3-us-west-1.amazonaws.com/5.jpg",
        "propertyListing_id": 1
    },
    {
        "id": 3,
        "src": "https://bnbair.s3-us-west-1.amazonaws.com/5.jpg",
        "propertyListing_id": 1
    },
    {
        "id": 4,
        "src": "https://bnbair.s3-us-west-1.amazonaws.com/2.jpg",
        "propertyListing_id": 1
    },
    {
        "id": 5,
        "src": "https://bnbair.s3-us-west-1.amazonaws.com/1.jpg",
        "propertyListing_id": 1
    }
  ]

  it('displays images', () => {
    const wrapper = shallow(<App photos={photos}/>)
    wrapper.find()
  })
})
