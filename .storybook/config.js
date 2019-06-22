import { configure, addParameters } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

setDefaults({
  header: true
});

addParameters({
  options: {
    name: 'monorepo starter kit'
  }
});

function loadStories() {
  const req = require.context('../src', true, /stories\.tsx$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
