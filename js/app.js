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
// const ul_element = document.querySelector('#navbar__list');
console.log(ul_element);
const head_section = document.querySelector(".page__header");
// section_elements[0].scrollIntoView();


function createNavig(){
    for(let i = 0; i < section_elements.length; i++){
        id_values =  section_elements[i].getAttribute('id');
        // console.log(id_values);
        li_element = document.createElement('li');
        li_element.setAttribute('class', 'menu__link');
        li_element.textContent = section_elements[i].getAttribute('data-nav');
        li_element.classList.add(id_values);
        if (i == 0){li_element.classList.add('active');}
        ul_element.appendChild(li_element); 
        li_element.addEventListener('click', function() {
            // const head_section = document.querySelector(".page__header");
            const current_li = document.getElementsByClassName("active");
            const current_section = document.querySelector(".your-active-class");
            const choose_section = document.querySelector("#"+this.classList[1]);
            // console.log(current_section);
            const dimentions_section = section_elements[i].getBoundingClientRect();
            const dimentions_head_section = head_section.getBoundingClientRect();
            //console.log(dimentions_head_section.bottom, ', ', dimentions_section.top, ', ' , -dimentions_head_section.bottom + dimentions_section.top)
            window.scrollBy({top:(-dimentions_head_section.bottom + dimentions_section.top), left: dimentions_section.left, behavior:'smooth' });
            // current_li[0].className = current_li[0].className.replace(" active", "");
            // this.className += " active";  
            // current_section.className = current_section.classList.remove("your-active-class"); 
            // choose_section.classList.add("your-active-class");                
        })
    }
}


createNavig()


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