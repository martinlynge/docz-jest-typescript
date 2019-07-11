import React from 'react';
import { shallow, mount } from 'enzyme';
import Test from './Test';

describe('<Test />', () => {
  const name = 'Foo bar';
  it('should render without crashing', () => {
    shallow(<Test name={name} />);
  });

  it('should display name', () => {
    const wrapper = mount(<Test name={name} />);

    expect(wrapper.text()).toEqual(name);
  });
});
