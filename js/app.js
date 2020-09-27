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


// function createNavig(){
//     for(let i = 0; i < section_elements.length; i++){
//         id_values =  section_elements[i].getAttribute('id') 
//         // console.log('i is ' + (i + 1));
//         // console.log(section_elements[i].getAttribute('data-nav'));
//         // console.log(id_values);
//         li_element = document.createElement('li');
//         li_element.setAttribute('class', 'menu__link');
//         a_element = document.createElement('a');
//         a_element.textContent = section_elements[i].getAttribute('data-nav');
//         a_element.setAttribute('href', '#'+id_values)
//         // a_element.setAttribute('style', 'padding:10px; font-size:20px');
//         ul_element.appendChild(li_element).appendChild(a_element);
//     }
// }


// function scrollToSection(curretn_section){
//     console.log(curretn_section)
//     section_elements[i].scrollIntoView({behavior:"smooth", block:"start"});
// }

function createNavig(){
    for(let i = 0; i < section_elements.length; i++){
        id_values =  section_elements[i].getAttribute('id') 
        li_element = document.createElement('li');
        li_element.setAttribute('class', 'menu__link');
        li_element.textContent = section_elements[i].getAttribute('data-nav');
        console.log(section_elements[i].getAttribute('data-nav'));
        ul_element.appendChild(li_element);        
        li_element.addEventListener('click', function(){
            section_elements[i].scrollIntoView({behavior:"smooth", block:"end"});
            const current = document.getElementsByClassName("active");
            if (current.length > 0){
                current[0].className = current[0].className.replace(" active", "");
            }   
            this.className += " active";
        }
    )}
}



createNavig()


// const li_navigation = document.getElementsByClassName("menu__link"); 
// // console.log(section_elements[0]);
// function eventListenNavClick(){
//     for (var i = 0; i < li_navigation.length; i++){
//         li_navigation[i].addEventListener('click', function(){
//             // console.log(section_elements[i]);
//             const current = document.getElementsByClassName("active");
//             if (current.length > 0){
//                 current[0].className = current[0].className.replace(" active", "");
//             }   
//             this.className += " active";
//         })
//     }
// }    

// eventListenNavClick()        
        




// function activateSection(){
//     const scrollVert = window.pageYOffset;
//     for(let i = 0; i < section_elements.length; i++){


// }






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