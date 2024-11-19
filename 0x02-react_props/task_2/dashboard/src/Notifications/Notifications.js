import NotificationItem from './NotificationItem';
import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
    const handleClick = () => {
        console.log('Close button has been clicked');
    }
    return (
        <div className='Notifications'>
         <button style={{
            position: 'absolute',
            top: '5px',
            right: '5px',
            marginTop: '10px',
            marginRight: '10px',
         }}
         aria-label='close'
         onClick={handleClick}
         >X</button>
         <p>Here is the list of notifications</p>
         <ul>
            <NotificationItem type='default' value='New course available' />
            <NotificationItem type='urgent' value='New resume available' />
            <NotificationItem type='urgent' html={getLatestNotification()} />
         </ul>
        </div>
    );
}