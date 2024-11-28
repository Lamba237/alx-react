import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

function Notifications({ displayDrawer, listNotifications }) {
    const handleClick = () => {
        console.log('Close button has been clicked');
    };

    return (
        <>
            <div className="menuItem">
                Your notifications
            </div>
            {displayDrawer && (
                <div className='Notifications'>
                    <button
                        style={{
                            position: 'absolute',
                            top: '5px',
                            right: '5px',
                            marginTop: '10px',
                            marginRight: '10px',
                        }}
                        aria-label='close'
                        onClick={handleClick}
                    >
                        X
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        {listNotifications.length === 0 ? (
                            <NotificationItem type='default' value='No new notification for now' />
                        ) : (
                            listNotifications.map((notification) => (
                                <NotificationItem
                                    key={notification.id}
                                    type={notification.type}
                                    value={notification.value}
                                    html={notification.html}
                                />
                            ))
                        )}
                    </ul>
                </div>
            )}
        </>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

export default Notifications;