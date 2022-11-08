const fs = require('fs/promises');
const path = require('path');
const ObjectId = require("bson-objectid");

const contactsPath = path.join(__dirname, 'db/contacts.json');

const updateContacts = async (contacts) => {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 1));
} 

const listContacts = async () => {
    const result = await fs.readFile(contactsPath);
    return JSON.parse(result);
}

const getContactById = async (id) => {
const contacts = await listContacts();
const result = await contacts.find(contact => contact.id === id);
if(!result) {
    return null;
}
return result;
}

const addContact = async (name, email, phone) => {
    const contacts = await listContacts();
    const newContact = {
        name: 'Sergii',
             email: 'Sergii@mail.com', 
              phone: '123-123-123',
              id: ObjectId()
    };
    contacts.push(newContact);
    updateContacts(contacts);
    return newContact;
    }

    const removeContact = async (id) => {
        const contacts = await listContacts();
        const indexContact = contacts.findIndex(contact => contact.id === id);

        if(indexContact === -1) {
            return null;
        };

        const [result] = contacts.splice(indexContact, 1);
        updateContacts(contacts);
        return result;
    }

module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact
};