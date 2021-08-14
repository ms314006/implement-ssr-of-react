import Content from './pages/Content';
import NotFound from './pages/NotFound';
import App from './App';

export default [{
  ...App,
  routes: [
    {
      ...Content,
      path: '/',
      exact: true,
    }, {
      ...NotFound,
    },
  ],
}];
