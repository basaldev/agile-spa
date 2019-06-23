import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Typography } from '../index';

describe('Typography', () => {
  test('render Typography', () => {
      const wrapper = shallow(
        <Typography content="content" />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
  });
});
