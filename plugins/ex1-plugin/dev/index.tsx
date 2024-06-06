import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { ex1PluginPlugin, Ex1PluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(ex1PluginPlugin)
  .addPage({
    element: <Ex1PluginPage />,
    title: 'Root Page',
    path: '/ex1-plugin',
  })
  .render();
