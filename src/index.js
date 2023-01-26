import './style.css';
import { mapMyArr } from './newDiv'; 
import restrauntScene from "./images/chris-liverani-restraunt-scene-unsplash.jpg"





const content = document.querySelector('.content');



const para = document.createElement('p');

content.append(para);

para.textContent = 'This is a text content pic a bOOOOO!!!!';

mapMyArr();

para.append(' hello');

para.classList.add('picAboo');
