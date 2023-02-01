function insertContactPage(){

  const content = document.querySelector('#content');


  content.style.cssText = 'padding: 0;margin: 0;background-image:url("./patrick-schneider-evening-dining-unsplash2.jpg");background-size: cover;background-repeat: no-repeat;background-position: center;background-attachment: fixed;height:100vh;width:100vw;border:0;'


    let contactPageString = 
    
    `<div class = 'restarauntName'>
         <p>Green's Food Escape</p>
               </div>
 
       <menu class = 'tabMenu'>
 
         <li class = 'homeButton'>  Home  </li>
         <li class = 'menuButton'>  Menu  </li>
         <li class = 'contactButton' style = 'padding:.3rem; border:5px solid black; border-radius:15px;' >Contact</li>
 
       </menu>

       <main class = 'contactInfo'>

       <div class = 'contactNumberAddress'>
        <h1> Contact us! </h1>
        <h2> Phone Number: 123-123-1234 </h2>
        <h2> Address:</h2><p style = 'display:flex; align-items: center; justify-content:center;'> 141738 Big Drive Way <br> Foodiah, Califorknia <br> 95473</p>

      </div>
       
        
        
        <div class = 'openDiv'>  
        <p style = ' background-color:var(--greenTransparent2);font-family:handWrittenBold;font-size:4rem;display:flex; align-items:center; justify-content:center; padding-bottom:0; margin-bottom:.3rem; margin-top:.3rem; border-radius:10px; padding-left:2rem; padding-right:2rem;' > Open</p>
        </div>
            
          <div class = 'hoursOpen'>
            <p>Friday & Saturday Lunch 11:30 - 3:30</p>
            <p>Friday & Saturday Dinner 4:30 - 8:30</p>
            <p>Sunday Lunch 11:30 - 3:30</p>
            <p>Sunday Dinner 4:00 - 8:30</p>
            <p>Monday Lunch 11:30 - 3:30</p>
            <p>Monday 4:30 - 8:30 </p>
            <p>Wednesday 4:30 to 8:30</p>
            <p>Thursday 4:30 - 8:30</p>
          </div>

        
       
        </main>
       
       `
     
 
   
   
   
   
 
   document.querySelector("#content").insertAdjacentHTML('afterbegin',contactPageString)
 
 }
 
 export { insertContactPage }