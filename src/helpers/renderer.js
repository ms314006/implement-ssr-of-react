import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import Routes from '../Routes';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>,
  );
  return `
    <html>
      <body>
        <div id="root">${content}</div>
        <script>
          window.__PRELOADED_STATE__= ${JSON.stringify(store.getState())}
        </script>
        <script src="./bundle.js"></script>
      </body>
    </html>
  `;
};
