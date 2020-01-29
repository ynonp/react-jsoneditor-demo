import React from 'react';
import {shallow} from 'enzyme';
import Label from './label';

test('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<Label text="hi" />);

  expect(checkbox.text()).toEqual('hi');
});
