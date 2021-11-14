import { mount } from 'enzyme';
import React from 'react';
import { Row } from './Row';

describe('Row component', () => {
  test('renders', () => {
    const wrapper = mount(<Row />);

    expect(wrapper.exists()).toBe(true);
  });

  /* Add more tests! */
});
