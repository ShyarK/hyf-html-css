const menu = document.getElementById('menu-hamburger');
const mainNav = document.getElementById('main-nav');
const clearButton = document.getElementById('clear');
const formInput = document.getElementById('search-keyword');
const topMenu = document.getElementById('top-menu');



// To add the close and drop-down class
menu.addEventListener("click", ()=> {    
    if (menu.classList.contains("close") && mainNav.classList.contains("drop-down")) {
         menu.classList.remove("close");
         mainNav.classList.remove("drop-down");
    }else{
        menu.classList.add("close");
        mainNav.classList.add("drop-down");
    }
  });

//Add class clear-active when form field has a value, and remove when doesn't
formInput.addEventListener("input", () => {
       clearButton.classList.add("clear-active");
    if(formInput.value.length === 0){
        clearButton.classList.remove("clear-active");
    }    
});

// Remove form field value

clearButton.addEventListener("click", () =>{
    if(formInput.value) {
        formInput.value = " ";
        clearButton.removeAttribute("class");
    }
});

// Add class onscroll

let startScroll = 0;
window.addEventListener('scroll', () => {
    let scrolled = Math.ceil(window.scrollY);

    if (scrolled > startScroll){
        mainNav.classList.remove("sticky-nav");      
      } else {
        mainNav.classList.add("sticky-nav");
      }
      if (scrolled === 0) 
        mainNav.removeAttribute("class");
        mainNav.classList.remove("drop-down");
        menu.classList.remove("close");  
        startScroll = scrolled;
   
});