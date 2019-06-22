import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from './index';

storiesOf('Image', module)
  .add('default', () =>
    <Image src="https://www.fillmurray.com/300/200" width={300} height={200} />
  );
