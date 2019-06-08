// Use the const keyword to declare variables that cannot be reassigned.
// Here I selected all element, that I want to change thier state. 
const menu = document.getElementById('menu-hamburger');
const mainNav = document.getElementById('main-nav');
const clearButton = document.getElementById('clear');
const formInput = document.getElementById('search-keyword');
const topMenu = document.getElementById('top-menu');
// The addEventlistener method attaches click event to document object (the div with the id of menu),
// And it has two preameters:
// 1- Type of the event like "click" or "onkeydown" and so many. 
// 2- A  callback function.
// when a user click on the menu, the callback function get excuted.
// Inside callback function, if statement will check if the certain conditions, defined in the parentheses is true
// If it is true the program executes the statement inside the curly braces. 
// If false will go to the else statment. 
menu.addEventListener("click", ()=> {    
    if (menu.classList.contains("close") && mainNav.classList.contains("drop-down")) {
         menu.classList.remove("close");
         mainNav.classList.remove("drop-down");
    }else{
        menu.classList.add("close");
        mainNav.classList.add("drop-down");
    }
  });

//Add class clear-active when form field has a value, and remove when it doesn't.
//Because the value of the form is a string we can find the length of the String 
//by writing .length,  when it equals to 0 it means it doesn't have anything in the form field.
// then the condition will be true.
formInput.addEventListener("input", () => {
       clearButton.classList.add("clear-active");
    if(formInput.value.length === 0){
        clearButton.classList.remove("clear-active");
    }    
});

// Remove form field value
// Here we check if the condition is ture
// So when it is ture the  program executes the statement inside the curly braces.

clearButton.addEventListener("click", () =>{
    if(formInput.value) {
        formInput.value = " ";
        clearButton.classList.remove("clear-active");
    }
});

// Add class onscroll
// onscroll is an event accures when a user scroll the web browser.
// The scrollY returns the number of pixels that the document is currently scrolled vertically.
// When its value is 0 it means scroll position is on the top.
// So when scrolling down will remove the calss
// When scrolling up will add the class
// When scrolling back to the top will remove the classes.

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
