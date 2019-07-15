
/* import "@scss/styles.scss";
import logoImg from "@img/logo.png";

let filename = logoImg.substring(logoImg.lastIndexOf('/') + 1);
logo.src = `assets/img/${filename}`;
 */


/* import 'bootstrap'; 

import "../scss/styles.scss";
import logo from "../img/logo.png";

document.querySelector("#logo").src = logo

let message = "Hello Webpack";
console.log(` Message is: ${message}`); */

import "@scss/styles.scss";
import logoImg from "@img/logo.png";


window.addEventListener('click', (ev) => {
    const elm = ev.target;
    const selector = elm.getAttribute('data-target');
    collapse(selector, 'toggle');
}, false);

const fnmap = {
    'toggle': 'toggle',
    'show': 'add',
    'hide': 'remove'
};
const collapse = (selector, cmd) => {
    document.querySelector(selector).classList[fnmap[cmd]]('show');
}

let filename = logoImg.substring(logoImg.lastIndexOf('/') + 1);
logo.src = `assets/img/${filename}`;

let message = "Hello Webpack";
console.log(` Message is: ${message}`);