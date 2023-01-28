//Front page of restaraunt app frontPage.js


function insertFrontPage(){


   let frontPageString = 
   
   `<div class = 'restarauntName'>
        <p>Green's Food Escape</p>
              </div>

      <menu class = 'tabMenu'>

        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>

      </menu>`

  const contentContainer =  document.querySelector(".content")

   contentContainer.insertAdjacentHTML('afterbegin',frontPageString)

}

export { insertFrontPage }