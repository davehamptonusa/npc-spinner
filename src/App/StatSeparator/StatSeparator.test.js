import React from 'react';
import ReactDOM from 'react-dom';
import StatSeparator from './StatSeparator';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatSeparator />, div);
  ReactDOM.unmountComponentAtNode(div);
});