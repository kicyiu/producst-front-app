import React from 'react';
import renderer from 'react-test-renderer';

import SearchBar from './SearchBar';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('SearchBar Component', () => {
    it('renders SearchBar correctly', () => {
      const tree = renderer.create(<SearchBar />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it ('calls when user click search button', () => {
        const onButtonClickMock = jest.fn();
        const wrapper = shallow(
          <SearchBar
            onNavSearch={onButtonClickMock}
            setSta
          />,
        );
        const buttonElement = wrapper.find('.search-button'); // step 1 above
        buttonElement.simulate('click'); // step 2
        
        expect(onButtonClickMock).toHaveBeenCalledTimes(1); // step 3
        expect(onButtonClickMock).toHaveBeenCalledWith('');
    });
});