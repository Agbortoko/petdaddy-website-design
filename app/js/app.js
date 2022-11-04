// Constants

const preloader = document.querySelector('#preloader');
const scrollButton = document.querySelector('#scrollToTop');


// Preloader

window.addEventListener('load', function(){
    preloader.classList.add('fadeloader');
    
});


// Scroll To Top

/**
 * Check if window is scrolled to reveal scroll to top button
 */
window.addEventListener('scroll', ()=>{

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

       scrollButton.classList.remove('d-none');
       scrollButton.classList.add('d-block');

    } else{
        scrollButton.classList.add('d-none');
    }

   
});


/**
 * implement scroll to top
 */

scrollButton.addEventListener('click', ()=>{
  
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
});


// Initialize bootstrap tooltip

const tooltips = document.querySelectorAll('.site-tooltip');

tooltips.forEach(tooltip => {
    new bootstrap.Tooltip(tooltip);
});
