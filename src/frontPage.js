//Front page of restaraunt app frontPage.js


function insertFrontPage(){

    const content = document.querySelector('#content');

    content.style.cssText = "padding: 0; margin: 0; background-image: url('./kristian-angelo-dining-scene-unsplash2.PNG'); background-size: cover; background-repeat: no-repeat; background-position: center; background-attachment: fixed; height:100vh; width:100vw; border:0;";

    //content.classList.add('homePage')

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