import React from 'react';

import { connect } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './Header.module.css';

const Header = ({ isAuthenticated }) => {
   return (
      <header className={s.container}>

         <Navigation />
         {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </header>
   );
};

const mapStateToProps = state => ({
   isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Header);