import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  { first: 'Philip', last: 'Johnson', address: '1680 East-West Rd', telephone: '808-808-8080', email: 'johnson@hawaii.edu' },
  { first: 'Lee', last: 'Altenberg', address: '1680 East-West Rd', telephone: '808-808-8080', email: 'altenberg@hawaii.edu' },
  { first: 'Kyungim', last: 'Baek', address: '1680 East-West Rd', telephone: '808-808-8080', email: 'baek@hawaii.edu' },
  { first: 'Cam', last: 'Moore', address: '1680 East-West Rd', telephone: '808-808-8080', email: 'moore@hawaii.edu' },
  { first: 'Jason', last: 'Leigh', address: '1680 East-West Rd', telephone: '808-808-8080', email: 'leigh@hawaii.edu' },
];

/**
 * Initialize the Contacts collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(contact) {
    Contacts.insert(contact);
  });
}
