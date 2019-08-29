import { shallow, mount, render } from 'enzyme';
import Modal from '../components/Modal.jsx';
import React from 'react';

describe('Modal', () => {
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

  const description={id: 1, property_description: "quod a nam"}

  it('displays images', () => {
    const wrapper = shallow(<Modal description={description} photos={photos}/>);
    expect(wrapper.contains(<img src="https://bnbair.s3-us-west-1.amazonaws.com/2.jpg"/>)).toEqual(true);
  })

  it('display property description', () => {
    const wrapper = shallow(<Modal description={description}photos={photos}/>);
    expect(wrapper.find('.description').text()).toEqual('quod a nam');
  })
})

