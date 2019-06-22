import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './index';

storiesOf('Button', module)
  .add('default', () =>
    <Button label="button label" onClick={() => alert('button is clicked')} />
  );
