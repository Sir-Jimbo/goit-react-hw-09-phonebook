import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import * as phonebookActions from '../../redux/phonebook/phonebook-actions';
import selectors from '../../redux/phonebook/phonebook-selectors';
import authSelectors from '../../redux/auth/auth-selectors';
import authActions from '../../redux/auth/auth-actions';
import { connect } from 'react-redux';
import s from './Notification.module.css';

class Notification extends Component {

   componentDidUpdate() {
      if (this.props.errorAuth) {
         setTimeout(() => {
            this.props.clearErrorAuth(this.state);
         }, 2500);
         return;
      }
      if (this.props.errorPb) {
         setTimeout(() => {
            this.props.clearErrorPb(this.state);
         }, 2500);
         return;
      }
   }

   render() {
      return (
         <CSSTransition
            in={this.props.message}
            timeout={250}
            classNames={s}
            unmountOnExit
         >
            <div className={s.overlay} >
               <p className={s.message}>
                  {this.props.message}
               </p>
            </div>
         </CSSTransition>
      );
   };
}
const mapStateToProps = (state) => ({
   errorPb: selectors.getError(state),
   errorAuth: authSelectors.getError(state)
})

const mapDispatchToProps = dispatch => ({
   clearErrorPb: () => dispatch(phonebookActions.clearError()),
   clearErrorAuth: () => dispatch(authActions.clearError())
});



export default connect(mapStateToProps, mapDispatchToProps)(Notification);