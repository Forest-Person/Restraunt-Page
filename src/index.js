import './style.css';
import { insertFrontPage } from './frontPage.js'; 
import restrauntScene from "./images/chris-liverani-restraunt-scene-unsplash.jpg"





const content = document.querySelector('.content');

insertFrontPage()

const button = document.querySelector('.deleteButton')

button.addEventListener('click', 

() => {

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    removeAllChildNodes(content)

}


)





