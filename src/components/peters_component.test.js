import React from 'react';
import ReactDOM from 'react-dom';
import PetersComponent from './peters_component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PetersComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
