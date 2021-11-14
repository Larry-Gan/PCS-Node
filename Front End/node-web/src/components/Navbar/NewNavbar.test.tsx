import { mount } from 'enzyme';
import React from 'react';
import { NewNavbar } from './NewNavbar';

describe('NewNavbar component', () => {
  test('renders', () => {
    const wrapper = mount(<NewNavbar title="test" links={[]} />);

    expect(wrapper.exists()).toBe(true);
  });

  /*
  test('redirects to about correctly', () => {
    mount(<NewNavbar title = "test" links = {[]} />);

    expect(screen.getByText('About').closest('link').toHaveAttribute('href', 'localhost:3000/about'))

  });*/
});
