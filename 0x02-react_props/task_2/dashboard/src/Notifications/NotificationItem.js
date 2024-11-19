import React from "react";
import PropTypes from "prop-types";
import { type } from "os";
import { html } from "cheerio";

function NotificationItem({ type, html, value }) {
    return (
        <li data-notification-type={type} dangerouslySetInnerHTML={html ? {__html: html } : undefined}>
            {!html && value}
        </li>
    );
}

NotificationItem.PropTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    value: PropTypes.string,
};

NotificationItem.defaultProps = {
    type: 'default',
    html: null,
    value: '',
};

export default NotificationItem;