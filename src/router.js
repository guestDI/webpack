import React from 'react';
import { Router, hashHistory } from 'react-router';

import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';

const componentRoutes = {
  component: Home,
  path: '/',
  indexRoute: { component: ArtistMain },
  childRoutes: [
    {
      path: 'artists/new',
      getComponent(_, cb) {
        FileSystem.import('./components/artists/ArtistCreate')
          .the((module) => cb(null, module.default))
      }
    },
    {
      path: 'artists/:id',
      getComponent(_, cb) {
        FileSystem.import('./components/artists/ArtistDetail')
          .the((module) => cb(null, module.default))
      }
    },
    {
      path: 'artists/:id/edit',
      getComponent(_, cb) {
        FileSystem.import('./components/artists/ArtistEdit')
          .the((module) => cb(null, module.default))
      }
    }
  ]
}

const Routes = () => {
  return (
    <Router history={hashHistory} routes={componentRoutes}/>
  );
};

export default Routes;
