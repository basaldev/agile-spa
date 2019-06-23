import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { CommentList } from './index';

storiesOf('CommentList', module)
  .add('default', () =>
    <CommentList comments={[
      { username: 'marty', content: 'this is a comment' },
      { username: 'marty', content: 'this is a comment' },
      { username: 'marty', content: 'this is a comment' }
    ]} />
  );
