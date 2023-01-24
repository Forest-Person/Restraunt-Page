import './style.css';
import { mapMyArr } from './newDiv'; 
import restrauntScene from "./images/chris-liverani-restraunt-scene-unsplash.jpg"



const container = document.createElement('div')
document.body.appendChild(container)
container.classList.add('mainContainer')


 // Add the image to our existing div.
 const myIcon = new Image();
 myIcon.src = restrauntScene;


 document.querySelector('.mainContainer').append(myIcon);



const para = document.createElement('p')

container.appendChild(para)

para.textContent = 'This is a text content pic a bOOOOO!!!!'

mapMyArr()

para.append(' hello')

para.classList.add('picAboo')
