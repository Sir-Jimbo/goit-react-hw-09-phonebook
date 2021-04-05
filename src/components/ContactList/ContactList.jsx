import React from 'react';
import { connect } from 'react-redux';
import operations from '../../redux/phonebook/phonebook-operations';
import selectors from '../../redux/phonebook/phonebook-selectors';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Contact from 'components/Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
   return (
      <TransitionGroup
         component="ul"
         className={s.list}
      >
         {contacts.map(({ id, name, number }) => (
            <CSSTransition
               key={id}
               timeout={250}
               classNames={s}
            >
               <Contact
                  id={id}
                  name={name}
                  number={number}
                  onClick={() => onDeleteContact(id)}
               />
            </CSSTransition>
         ))
         }
      </TransitionGroup >

   )
}

const mapStateToProps = (state) => ({
   contacts: selectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
   onDeleteContact: id => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);