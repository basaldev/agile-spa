import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CommentList } from '../index';

describe('CommentList', () => {
  test('render CommentList', () => {
      const wrapper = shallow(
        <CommentList comments={[{ username: 'username', content: 'content' }]} />
      );
      expect(toJson(wrapper)).toMatchSnapshot();
  });
});
