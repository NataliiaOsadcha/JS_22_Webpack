import $ from "jquery";
import './main.css';
import {getButton} from './button/button';
import image from './assets/react-ref.png'

console.log($("body"));
getButton();

const picture = document.createElement('img');
picture.setAttribute('src', image);

document.querySelector('body').appendChild(picture);

const text = document.createElement('span');
text.textContent = 'hello!';
document.querySelector('body').appendChild(text);

