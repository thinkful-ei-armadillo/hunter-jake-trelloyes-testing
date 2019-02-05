import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import renderer from 'react-test-renderer';

describe('<Card />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

describe('<Card />', () => {
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card title = "first card" content = "lorem ipsum"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
})