import React from 'react';
import List from './List';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {

  const cards = [
    {
      key : 'a',
      title : 'Card Title',
      content : 'Card Content',
    },
  ];

  const div = document.createElement('div');
  ReactDOM.render(<List header cards={cards} />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('<List />', () => {
  it('renders the UI as expected', () => {
    const cards = [
      {
        key : 'a',
        title : 'Card Title',
        content : 'Card Content',
      },
    ];
    const tree = renderer
      .create(<List header="example header" cards={cards}  />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
})