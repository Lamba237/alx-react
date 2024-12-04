import { LOGIN, LOGOUT, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, hideNotificationDrawer, displayNotificationDrawer } from "./uiActionCreators";
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

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

// Create a mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS when API returns the right response', () => {
    fetchMock.getOnce('../../dist/login-success.json', {
      body: { success: true },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password123' } },
      { type: LOGIN_SUCCESS }
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password123')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches LOGIN and LOGIN_FAILURE when API query fails', () => {
    fetchMock.getOnce('../../dist/login-success.json', 500);

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password123' } },
      { type: LOGIN_FAILURE }
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password123')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});