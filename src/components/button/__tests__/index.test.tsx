import * as React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../index';

describe('Button', () => {
  test('render Button', () => {
      const wrapper = shallow(
        <Button label="label" onClick={jest.fn()} />
      );
      expect(wrapper).toMatchSnapshot();
  });
});
