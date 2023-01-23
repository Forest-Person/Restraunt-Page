import './style.css';
import { mapMyArr } from './newDiv'; 


const container = document.querySelector('#content')

const para = document.createElement('p')

container.appendChild(para)

para.textContent = 'This is a text content pic a bOOOOO!!!!'

mapMyArr()

para.append(' hello')

para.classList.add('picAboo')
