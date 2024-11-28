import { NotificationTypeFilters } from "./notificationActionTypes";
import { markAsAread, setNotificationFilter } from "./notificationActionCreators";
import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
import store from './store';
import { bindActionCreators } from 'redux';

test('markAsRead action creator returns correct action', () => {
    const index = 1;
    const expectedAction = {
        type: MARK_AS_READ,
        index
    };
    expect(markAsAread(index)).toEqual(expectedAction);
});

test('setNotificationfilter action creator returns action', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const expectedAction = {
        type: SET_TYPE_FILTER,
        filter
    };
    expect(setNotificationFilter(filter)).toEqual(expectedAction);
});

// Bound action creator
export const boundmarkAsRead = bindActionCreators(markAsAread, store.dispatch);
export const boundsetNotificationFilter = bindActionCreators(setNotificationFilter, store.dispatch);