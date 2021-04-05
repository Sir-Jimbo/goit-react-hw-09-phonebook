import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { CSSTransition } from 'react-transition-group';
import Logo from '../components/Logo/Logo';
import operations from '../redux/phonebook/phonebook-operations';
import Spinner from '../components/Spinner/Spinner';
import Notification from '../components/Notification/Notification';
import selectors from '../redux/phonebook/phonebook-selectors';

export default function PhoneBookPage() {
    const contacts = useSelector(selectors.getAllContacts);
    const isLoadingContacts = useSelector(selectors.getLoading);
    const error = useSelector(selectors.getError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(operations.fetchContacts());
    }, [dispatch]);
    return (
        <>
            <Logo />

            <Notification
                message={error} />

            <ContactForm />

            <Filter />

            {isLoadingContacts && <Spinner />}

            <CSSTransition
                in={contacts.length > 0}
                timeout={0}
                ommountOnExit>
                <ContactList />
            </CSSTransition>



        </>
    );
};

PhoneBookPage.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    fetchContacts: PropTypes.func,
    isLoadingContacts: PropTypes.bool,
    error: PropTypes.string
};