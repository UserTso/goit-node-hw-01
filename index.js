const {program} = require('commander');
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

program
.option('-a, --action <type>')
.option('-i, --id <type>')
.option('-n, --name <type>')
.option('-e, --email <type>')
.option('-p, --phone <type>')

program.parse(process.argv);

const options = program.opts();

invokeAction(options);

// invokeAction({action: 'getContactById', id: '5'});
// invokeAction({action: 'addContact', name: 'Mango', email: 'mango@mail.com', phone: '322-22-22'});
// invokeAction({action: 'removeContact', id: '10'});
// invokeAction({action: 'listContacts'});

