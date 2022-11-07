// const argv = require("yargs").argv;
const contacts = require('./contacts');

const invokeAction = async({ action, id, name, email, phone }) => {
  switch (action) {
    case "listContacts":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    case "getContactById":
      const oneContacts = await contacts.getContactById(id);
      console.log(oneContacts);
      break;

    case "addContact":
     const newContact = await contacts.addContact(name, email, phone);
      break;

    case "removeContact":
     const deleteContact = await contacts.removeContact(id);
     console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}


// invokeAction({action: 'getContactById', id: '10'});
invokeAction({action: 'addContact', name: 'Sergii', email: 'Sergii@mail.com', phone: '123-123-123'});
invokeAction({action: 'removeContact', id: '6369112e46ac3508fc047c5e'});
invokeAction({action: 'listContacts'});