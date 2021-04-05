import React from 'react';
import s from './UserMenu.module.css';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import defaultAvatar from '../../images/default-avatar.png';
import ButtonMenu from '../button/button';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={s.container}>
    <img src={avatar} alt="" width="32" className={s.avatar} />
    <span className={s.name}>Welcome, {name}</span>
    {/* My button
    <button className={s.MenuButton} type="button" onClick={onLogout}>
      Logout
    </button> */}

    {/* Button from Material UI */}
    <ButtonMenu onClick={onLogout} />
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

