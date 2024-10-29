import $ from 'jquery';
import { debounce } from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

const button = document.getElementsByTagName('button')[0];
const countElement = document.getElementById('count');
// initiliaze click to 0
let count = 0;

const handleClick = () => {
    count++;
    countElement.textContent = `Clicked ${count} times`;
};

const debouncedHandleClick = debounce(handleClick, 300);

button.addEventListener('click', debouncedHandleClick);