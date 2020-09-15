import React from 'react';
import renderer from 'react-test-renderer';

import ProductCard from './ProductCard';

it('renders ProductCard correctly when there is a palindrono search', () => {
    const tree = renderer.create(<ProductCard deal={true}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders ProductCard correctly when there is not palindrono search', () => {
    const tree = renderer.create(<ProductCard deal={false}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });