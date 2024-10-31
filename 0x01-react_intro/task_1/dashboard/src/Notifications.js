import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

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
            marginRight: '10px'
         }}
         aria-label='close'
         onClick={handleClick}
         >
         X
         </button>
         <p>Here is the list of notifications</p>
         <ul>
            <li data-priority="default">New course available</li>
            <li data-priority="urgent">New resume available</li>
            <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification() }}></li>
         </ul>
        </div>
    );
}