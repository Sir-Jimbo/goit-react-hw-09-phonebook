import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { CSSTransition } from 'react-transition-group';
import Logo from '../components/Logo/Logo';
import operations from '../redux/phonebook/phonebook-operations';
import Spinner from '../components/Spinner/Spinner';
import Notification from '../components/Notification/Notification';
import selectors from '../redux/phonebook/phonebook-selectors';

class PhoneBookPage extends Component {

    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.object),
        fetchContacts: PropTypes.func,
        isLoadingContacts: PropTypes.bool,
        error: PropTypes.string
    };

    componentDidMount() {
        this.props.fetchContacts();

    };

    render() {
        return (
            <>
                <Logo />

                <Notification
                    message={this.props.error} />

                <ContactForm />

                <Filter />

                {this.props.isLoadingContacts && <Spinner />}

                <CSSTransition
                    in={this.props.contacts.length > 0}
                    timeout={0}
                    ommountOnExit>
                    <ContactList />
                </CSSTransition>



            </>
        );
    };
};

const mapStateToProps = (state) => ({
    contacts: selectors.getAllContacts(state),
    isLoadingContacts: selectors.getLoading(state),
    error: selectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(operations.fetchContacts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookPage);