const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');


// Gat all contacts.
const getContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.find()
    res.status(200).json(contact);
});

// Create a new contact.
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('filled is required.')
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    });
    res.status(201).json({ contact })
});

// Get a contact by id.
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('contact not found.')
    }
    res.status(200).json({ contact })
});

// Update a contact by id.
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('contact not found.')
    };
    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json({ updateContact });
});

// delete a contact by id.
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('contact not found.')
    };
    const deleteContact = await Contact.findByIdAndDelete(contact);
    res.status(200).json(deleteContact)
});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact }