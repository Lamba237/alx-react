import * as Notifications from '../../notifications.json';

export default function getAllNotificationsByUser(userId) {
    //  a list containing all the context objects from
    // the notifications.json data when the author id is the same as the userId
    return Notifications.default.filter(notification => notification.author.id === userId);
}