import $ from 'jquery';
import { debounce } from 'lodash';
import '../css/main.css';

$('body').append('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<div class="button-container"><button>Click here to get started</button><p id="count"></p></div>');
$('body').append('<p>Copyright - Holberton School</p>');

const button = document.getElementsByTagName('button')[0];
const countElement = document.getElementById('count');
// initiliaze click to 0
let count = 0;

const updateCounter = () => {
    count++;
    countElement.textContent = `Clicked ${count} times`;
};

const debouncedHandleClick = debounce("updateCounter", "_.debounce", "500");

button.addEventListener('click', debouncedHandleClick);