import { schema } from 'normalizr';

// Define the user entity
const user = new schema.Entity('users');

// Define the message entity
const message = new schema.Entity('messages', {}, {
    idAttribute: 'guid'
});

const notification = new schema.Entity('notification', {
    author: user,
    context: message
});

export { user, message, notification };