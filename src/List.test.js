import React from 'react';
import List from './List';
import ReactDOM from 'react-dom';

describe('<List />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

// describe('<Card />', () => {
//   it('renders the UI as expected', () => {
//     const tree = renderer
//       .create(<Card title = "first card" content = "lorem ipsum"/>)
//       .toJSON();
//     expect(tree).toMatchSnapshot();  
//     });
// })