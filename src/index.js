import './style.css';
import { insertFrontPage } from './frontPage.js'; 
import { insertMenuPage } from './menuPage.js';
import { insertContactPage } from './contactPage.js'


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

insertFrontPage()

const content = document.querySelector('#content');





content.addEventListener('click',(event)=>{ //Insert Menu Page and remove all old nodes.

   const elementTarget = event.target

    if (elementTarget.className === 'homeButton') {

        removeAllChildNodes(content)
        insertFrontPage()

    }else if (elementTarget.className === 'menuButton'){

    removeAllChildNodes(content)

    insertMenuPage()

}else if (elementTarget.className === 'contactButton') {

    removeAllChildNodes(content)
    insertContactPage()

}

}
)











  









