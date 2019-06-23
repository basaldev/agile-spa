import * as React from 'react';
import { shallow } from 'enzyme';
import { CommentList } from '../index';

describe('CommentList', () => {
  test('render CommentList', () => {
      const wrapper = shallow(
        <CommentList comments={[{ username: 'username', content: 'content' }]} />
      );
      expect(wrapper).toMatchSnapshot();
  });
});
