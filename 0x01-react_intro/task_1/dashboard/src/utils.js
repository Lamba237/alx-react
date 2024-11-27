export function getFullYear() {
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
    if (isIndex === true) {
        return 'Holberton School';
    } else if (isIndex === false) {
        return 'Holberton School main dashboard';
    } else {
        return 'invalid input type';
    }
}

export function getLatestNotification() {
    return (
        "<strong>Urgent requirement</strong> - complete by EOD"
    );
}