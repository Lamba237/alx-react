import { user } from "../schema/notifications";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import store from './store';
import { bindActionCreators } from 'redux';

export function login(email, password) {
    return {
        type: LOGIN,
        user: { email, password },
    };
}

export function logout() {
    return {
        type: LOGOUT
    };
}

export function displayNotificationDrawer() {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER
    };
}

export function hideNotificationDrawer() {
    return {
        type: HIDE_NOTIFICATION_DRAWER
    };
}

// Bound action creators
export const Boundlogin = bindActionCreators(login, store.dispatch);
export const Boundlogout = bindActionCreators(logout, store.dispatch);
export const Bounddisplay = bindActionCreators(displayNotificationDrawer, store.dispatch);
export const BoundhideNotification = bindActionCreators(hideNotificationDrawer, store.dispatch);