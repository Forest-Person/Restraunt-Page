import './style.css';
import { insertFrontPage } from './frontPage.js'; 






const content = document.querySelector('#content');

window.addEventListener('load',insertFrontPage())

content.classList.add('homePage')





function removeAllChildNodes(parent) {  //function to remove all child nodes of an element
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function changeClass(newClassName) { //function to change classname for when a new link is clicked.


if (content.classList.contains(newClassName) !== true){

    content.className = newClassName
}

}
  









