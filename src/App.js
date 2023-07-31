import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import AppBar from './components/AppBar';
import { Route, Routes } from 'react-router-dom';

import { Container } from './components/Container/Container';
import { PrivateRoute } from './components/PrivatRoute';
import { RestrictedRoute } from './components/RestrictedRoute';
import { authSelectors } from './redux/auth';
import { refreshUser } from 'redux/auth/auth-operations';
import { Loader } from 'components/Loader/Loader';

const HomeView = lazy(() => import('views/HomeView'));
const Registration = lazy(() => import('views/Registration'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      {isRefreshing ? (
        <Loader />
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
                    component={<LoginView />}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ContactsView />}
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
