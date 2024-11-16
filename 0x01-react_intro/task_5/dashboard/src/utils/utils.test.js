function getFullYear() {
    return new Date().getFullYear();
}

test("check if the function returns the correct year", () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
});

function getFooterCopy(isIndex) {
    if (isIndex === true) {
        return 'Holberton School';
    } else if (isIndex === false) {
        return 'Holberton School main dashboard';
    } else {
        return 'invalid input type';
    }
}

test("Expect getFooter to be Holberton School if true", () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
});

test("Expect getFooter to be Holberton School main dashboard if false", () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

function getLatestNotification() {
    return (
        "<strong>Urgent requirement</strong> - complete by EOD"
    );
}

test("check return string for getLatestNotification", () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});