import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContacts } from '../../actions/contactActions';
import Contact from './Contact';
import PropTypes from 'prop-types';

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;

    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.length > 0 ? (
          contacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))
        ) : (
          <p className="lead">No Contacts here yet</p>
        )}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

export default connect(mapStateToProps, { getContacts })(Contacts);
