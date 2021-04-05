import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
//import { CSSTransition } from 'react-transition-group';
import Layout from 'components/Layout/Layout';
import Section from 'components/Section/Section';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import Spinner from './components/Spinner/Spinner';
//import s from './components/PhoneBook/PhoneBook.module.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const PhoneBookPage = lazy(() => import('./pages/PhoneBookPage'));
class App extends Component {

  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
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
      </Layout >
    );
  };
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser
}

export default connect(null, mapDispatchToProps)(App);