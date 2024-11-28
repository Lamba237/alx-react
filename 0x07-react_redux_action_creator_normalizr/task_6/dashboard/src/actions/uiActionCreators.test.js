import { LOGIN, LOGOUT, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, hideNotificationDrawer, displayNotificationDrawer } from "./uiActionCreators";

test('login action creator returns correct action', () => {
    const email = 'test@example.com';
    const password = "password127";
    const expectedAction = {
        type: LOGIN,
        user: {
            email,
            password
        }
    };
    expect(login(email, password)).toEqual(expectedAction);
});

test('logout action creator returns correct action', () => {
    const expectedAction = {
        type: LOGOUT
    };
    expect(logout()).toEqual(expectedAction);
});

test('displayNotification action creator returns correctly',() => {
    const expectedAction = {
        type: DISPLAY_NOTIFICATION_DRAWER
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
});

test('hidenotificationaction creator returns correctly', () => {
    const expectedData = {
        type: HIDE_NOTIFICATION_DRAWER
    };
    expect(hideNotificationDrawer()).toEqual(expectedData);
});