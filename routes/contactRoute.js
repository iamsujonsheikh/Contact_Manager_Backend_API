const { getContacts, createContact, getContact, updateContact, deleteContact } = require('../controllers/contactController');

const contactRoute = require('express').Router();

// Gat all contacts.
contactRoute.get('/', getContacts);
// Create a new contact.
contactRoute.post('/', createContact);
// Get a contact by id.
contactRoute.get('/:id', getContact);
// Update a contact by id.
contactRoute.put('/:id', updateContact);
// Delete a contact by id.
contactRoute.delete('/:id', deleteContact);

module.exports = contactRoute;