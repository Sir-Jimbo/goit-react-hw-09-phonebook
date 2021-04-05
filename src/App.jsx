import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from 'components/Layout/Layout';
import Section from 'components/Section/Section';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import Spinner from './components/Spinner/Spinner';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const PhoneBookPage = lazy(() => import('./pages/PhoneBookPage'));

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Layout>
      <Section>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <PublicRoute
              exact
              path="/"
              restricted
              redirectTo="/contacts"
              component={HomePage} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterPage} />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginPage} />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={PhoneBookPage}
            />
          </Switch>
        </Suspense>
      </Section>
    </Layout>
  );
}