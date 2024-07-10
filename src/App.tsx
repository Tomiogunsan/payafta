
import { Route, Routes } from 'react-router-dom';
import BaseRoutes from './constant/baseRoutes';
import PageNotFound from './modules/authentication/PageNotFound';
// import PrivateRoute from 'routes/PrivateRoute';

function App() {
  return (
    <Routes>
      {BaseRoutes.map(({ path, Layout, component: Component }) =>
        Layout ? (
          <Route
            key={path}
            path={path}
            element={
              // <PrivateRoute>
              <Layout key={path}>
                <Component />
              </Layout>
              // </PrivateRoute>
            }
          />
        ) : (
          <Route key={path} path={path} element={<Component />} />
        ),
      )}
      <Route path="pageNotFound" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
