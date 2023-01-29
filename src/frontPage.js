//Front page of restaraunt app frontPage.js


function insertFrontPage(){


   let frontPageString = 
   
   `<div class = 'restarauntName'>
        <p>Green's Food Escape</p>
              </div>

      <menu class = 'tabMenu'>

        <li class = 'homeButton' style = 'padding:.3rem; border:5px solid black; border-radius:15px;'>Home</li>
        <li class = 'menuButton' >Menu</li>
        <li class = 'contactButton' >Contact</li>

      </menu>
      
      <main class = 'sloganContainer'>

      <h1 class = 'foodSlogan'> Escape with us, please sit down, close your eyes, and BANGEEEERAAANNNG!</h1>
      
      </main>
      `
    

  
  
  
  

  document.querySelector("#content").insertAdjacentHTML('afterbegin',frontPageString)

}

export { insertFrontPage }