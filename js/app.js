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
const ul_element = document.querySelector('#navbar__list');
const section_elements = document.querySelectorAll('section');
const head_section = document.querySelector(".page__header");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


function createNavig(){
    for(let i = 0; i < section_elements.length; i++){
        let id_values =  section_elements[i].getAttribute('id');
        // console.log(id_values);
        let li_element = document.createElement('li');
        li_element.setAttribute('class', 'menu__link');
        li_element.textContent = section_elements[i].getAttribute('data-nav');
        li_element.classList.add(id_values);
        if (i == 0){li_element.classList.add('active');}
        ul_element.appendChild(li_element); 
        li_element.addEventListener('click', function() {
            const current_li = document.getElementsByClassName("active");
            const current_section = document.querySelector(".your-active-class");
            const choose_section = document.querySelector("#"+this.classList[1]);
            const dimentions_section = section_elements[i].getBoundingClientRect();
            const dimentions_head_section = head_section.getBoundingClientRect();
            window.scrollBy({top:(-dimentions_head_section.bottom + dimentions_section.top), left: dimentions_section.left, behavior:'smooth' });
             
        })
    }
}



/*Checks which part of the Page is in View, and changes its color*/
/* Thanks to Toni's post where I got an idea how to get section dimentions*/

function partInView () {
    const dimentions_head_section = head_section.getBoundingClientRect();
    function sectionActive(element) {
        const dimentions = element.getBoundingClientRect();
        return (            
            dimentions.top <= dimentions_head_section.bottom + 1 && dimentions.bottom > dimentions_head_section.bottom + 1
        );
    }
    
 
    for (let item of section_elements) {
            window.addEventListener("scroll", function() {
                li_local = document.querySelector('.'+item.id);
                if (sectionActive(item)) {
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



 
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

function main() {
    // build the nav
    createNavig()
    //capture scrolling and highlight active section and corresponding nav element
    partInView();

}

main();




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