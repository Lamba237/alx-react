import { user } from "../schema/notifications";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
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

export function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    };
}

export function loginFailure() {
    return {
        type: LOGIN_FAILURE
    };
}

// Bound action creators
export const Boundlogin = bindActionCreators(login, store.dispatch);
export const Boundlogout = bindActionCreators(logout, store.dispatch);
export const Bounddisplay = bindActionCreators(displayNotificationDrawer, store.dispatch);
export const BoundhideNotification = bindActionCreators(hideNotificationDrawer, store.dispatch);
export const BoundloginSuccess = bindActionCreators(loginSuccess, store.dispatch);


export function loginRequest(email, password) {
    return (dispatch) => {
        dispatch(login(email, password));

        return fetch('../../dist/login-success.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            dispatch(loginSuccess());
        })
        .catch((error) => {
            dispatch(loginFailure());
        });
    };
}