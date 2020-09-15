import React from 'react';
import renderer from 'react-test-renderer';

import NavBar from './NavBar';

it('renders NavBar correctly', () => {
  const tree = renderer.create(<NavBar />).toJSON();
  expect(tree).toMatchSnapshot();
});