//Front page of restaraunt app frontPage.js


function insertMenuPage(){

  const content = document.querySelector('#content');


  content.style.cssText = 'padding: 0;margin: 0;background-image:url("./travis-grossen-chef-unsplash2.jpg");background-size: cover;background-repeat: no-repeat;background-position: center;background-attachment: fixed;height:100vh;width:100vw;border:0;'


    let menuPageString = 
    
    `<div class = 'restarauntName'>
         <p>Green's Food Escape</p>
               </div>
 
       <menu class = 'tabMenu'>
 
         <li class = 'homeButton' '>Home</li>
         <li class = 'menuButton' style = 'padding:.3rem; border:5px solid black; border-radius:15px;' >Menu</li>
         <li class = 'contactButton' >Contact</li>
 
       </menu>

       <section class = 'menuChoices'>
          
        <img src = "./alfredo.PNG">
          <h2>Chicken Alfredo</h2>
          <p> Our slow cooked tender chicken slices with long gorgeous hand made pasta strips in the most luxurious cream sauce you have ever dreamed of.</p>
       
        <img src = "./pizza.PNG">
          <h2>Pizza Marguerite</h2>
          <p>Our finest pizza with tomato, jalapenos, proscuitto, basil and arugula.</p>
         
        <img src = "./dessert.PNG">
          <h2> Pistaccio Pie</h2>
          <p>Rated best pistaccio pie by foodie Magizine! Creamy texture, sweet flavor, laden with frosted pistaccio and candied goji berries for that Health Kick to the soul!<p>

        <img src = "./drinks.PNG">
          <h2> Drinks for ALL! </h2>
          <p> Water, Beer, Lemonade, Crystal waters, glacial ice by the bucket.</p>
        
       `
     

   
   
   
   
 
   document.querySelector("#content").insertAdjacentHTML('afterbegin',menuPageString)
 
 }
 
 export { insertMenuPage }