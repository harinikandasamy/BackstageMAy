import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const ex1PluginPlugin = createPlugin({
  id: 'ex1-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const Ex1PluginPage = ex1PluginPlugin.provide(
  createRoutableExtension({
    name: 'Ex1PluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
