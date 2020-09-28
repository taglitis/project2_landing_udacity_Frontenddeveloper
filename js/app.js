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


function createNavig(){
    for(let i = 0; i < section_elements.length; i++){
        id_values =  section_elements[i].getAttribute('id') 
        li_element = document.createElement('li');
        li_element.setAttribute('class', 'menu__link');
        li_element.textContent = section_elements[i].getAttribute('data-nav');
        li_element.classList.add(id_values)
        // console.log(section_elements[i].getAttribute('data-nav'));
        ul_element.appendChild(li_element);        
        li_element.addEventListener('click', function(){
            section_elements[i].scrollIntoView({behavior:"smooth", block:"center"});
            const current = document.getElementsByClassName("active");
            if (current.length > 0){
                current[0].className = current[0].className.replace(" active", "");
            }   
            this.className += " active";
        }
    )}
}


createNavig()


/*Checks which part of the Page is in View, and changes its color*/
/* Thanks to Toni's post where I got an idea how to get section dimentions*/

function partInView () {
    function InViewport(element) {
        const dimentions = element.getBoundingClientRect();
        return (
            dimentions.top >= 0 &&
            dimentions.left >= 0 &&
            dimentions.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            dimentions.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

    }    


    for (let item of section_elements) {
        console.log("section_elements")
        console.log(item);        
        window.addEventListener("scroll", function(event) {
            li_local = document.querySelector('.'+item.id);
            console.log("li_local")
            console.log(li_local);
            if (InViewport(item)) {
            item.classList.add("your-active-class");
            li_local.classList.add("active");
            } else {
            item.classList.remove("your-active-class");
            li_local.classList.remove("active");
        }
        },
        true
        );
    }
}

partInView();

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