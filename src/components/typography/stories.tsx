import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Typography } from './index';

storiesOf('Typography', module)
  .add('default', () =>
    <Typography content="This is text" />
  )
  .add('h1', () =>
    <Typography type="h1" content="This is h1 text" />
  )
  .add('h2', () =>
    <Typography type="h2" content="This is h2 text" />
  )
  .add('h3', () =>
    <Typography type="h3" content="This is h3 text" />
  )
  .add('h4', () =>
    <Typography type="h4" content="This is h4 text" />
  );
