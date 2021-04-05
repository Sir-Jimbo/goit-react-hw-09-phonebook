import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/phonebook/phonebook-operations';
import selectors from '../../redux/phonebook/phonebook-selectors';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Contact from 'components/Contact/Contact';
import s from './ContactList.module.css';

export default function ContactList() {
   const dispatch = useDispatch();
   const contacts = useSelector(selectors.getVisibleContacts);
   const onDeleteContact = id => dispatch(operations.deleteContact(id));
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