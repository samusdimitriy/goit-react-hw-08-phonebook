import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations, authSelectors } from './redux/auth';

// const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const View = lazy(() => import('./views/TodosView'));
// const UploadView = lazy(() => import('./views/UploadView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Hello! Just a moment, please.</h1>
      ) : (
        <>
          <AppBar />
          <Switch>
            <Suspense fallback={<p>Loading ...</p>}>
              {/* <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute> */}
              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginView />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <TodosView />
              </PrivateRoute>
              {/* <PrivateRoute path="/upload" redirectTo="/login">
                <UploadView /> 
              </PrivateRoute> */}
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  );
}
