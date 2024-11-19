import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications({ displayDrawer }) {
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
                        <NotificationItem type='default' value='New course available' />
                        <NotificationItem type='urgent' value='New resume available' />
                        <NotificationItem type='urgent' html={getLatestNotification()} />
                    </ul>
                </div>
            )}
        </>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
    displayDrawer: false,
};

export default Notifications;