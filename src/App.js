import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import AppBar from './components/AppBar';
import { Route, Routes } from 'react-router-dom';

import { Container } from './components/Container/Container';
import { PrivateRoute } from './components/PrivatRoute';
import { RestrictedRoute } from './components/PublicRoute';
import { authSelectors } from './redux/auth';
import { refreshUser } from 'redux/auth/auth-operations';

// import { Wrapper } from 'components/Container/Container.styled';

const HomeView = lazy(() => import('views/HomeView'));
const Registration = lazy(() => import('components/Registration/Registration'));
const Login = lazy(() => import('components/Login/Login'));
const FormContact = lazy(() => import('components/FormContact/FormContact'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      {isRefreshing ? (
        <h1>Hello! Just a moment, please.</h1>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Container />}>
              <Route index element={<HomeView />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/login"
                    component={<Registration />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Login />}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<FormContact />}
                  />
                }
              />
            </Route>
            <Route path="*" element={<HomeView />} />
          </Routes>
        </>
      )}
    </Suspense>
  );
}
