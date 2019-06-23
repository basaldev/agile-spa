import * as React from 'react';
import { shallow } from 'enzyme';
import { Typography } from '../index';

describe('Typography', () => {
  test('render Typography', () => {
      const wrapper = shallow(
        <Typography content="content" />
      );
      expect(wrapper).toMatchSnapshot();
  });
});
