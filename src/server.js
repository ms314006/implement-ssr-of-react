import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './Routes';
import renderer from './helpers/renderer';
import createStore from './store';

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static('dist'));

app.get('*', (req, res) => {
  const store = createStore();
  const { dispatch } = store;
  const routes = matchRoutes(Routes, req.path);
  const promises = routes.map(
    ({ route }) => (route.serverLoadData ? route.serverLoadData(dispatch) : null),
  );
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
