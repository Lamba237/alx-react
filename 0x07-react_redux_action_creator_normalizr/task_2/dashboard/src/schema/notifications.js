import { schema } from 'normalizr';
import { normalize } from 'normalizr';
import * as Notifications from '../../notifications.json';

function getAllNotificationsByUser(userId) {
    //  a list containing all the context objects from
    // the notifications.json data when the author id is the same as the userId
    const normalizedData = normalize(Notifications.default, [notification]);
    const userNotifications = [];

    for (const id in normalizedData.entities.notifications) {
        const notif = normalizedData.entities.notifications[id];
        if (notif.author === userId) {
            userNotifications.push(normalizedData.entities.messages[notif.context]);
        }
    }
    return userNotifications;
}

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

export { user, message, notification, getAllNotificationsByUser };