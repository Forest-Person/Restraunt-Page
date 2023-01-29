import './style.css';
import { insertFrontPage } from './frontPage.js'; 
import { insertMenuPage } from './menuPage';


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



const content = document.querySelector('#content');

window.addEventListener('load',insertFrontPage())

content.classList.add('homePage')

const menuButton = document.querySelector('.menuButton')



menuButton.addEventListener('click',()=>{ //Remove all nodes and replace with the menu page
removeAllChildNodes(content)

insertMenuPage()
}
)








  









