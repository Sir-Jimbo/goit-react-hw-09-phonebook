import React from 'react';

import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './Header.module.css';

export default function Header() {
   const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
   return (
      <header className={s.container}>

         <Navigation />
         {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
   );
};