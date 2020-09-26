/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const ul_element = document.querySelector('#navbar__list');
let li_element, a_element, id_values;
let section_elements = document.querySelectorAll('section');
for(let i = 0; i < section_elements.length; i++){
    id_values =  section_elements[i].getAttribute('id') 
    console.log('i is ' + (i + 1));
    console.log(section_elements[i].getAttribute('data-nav'));
    console.log(id_values);
    li_element = document.createElement('li');
    a_element = document.createElement('a');
    a_element.textContent = section_elements[i].getAttribute('data-nav');
    a_element.setAttribute('href', '#'+id_values)
    a_element.setAttribute('style', 'padding:10px; font-size:20px')
    // li_element.appendChild(a_element);
    ul_element.appendChild(li_element).appendChild(a_element);
} 






/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


