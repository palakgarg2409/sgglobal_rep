/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    const navbarCollapsible = document.body.querySelector('#mainNav');
    var navbarShrink = function () {
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
                navbarCollapsible.classList.add('navbar-shrink');
            }
            
        });
    });

});


var loader = document.getElementById("preloader");
loader.style.opacity = 1;
window.addEventListener("load", function(){
    setTimeout(() => {
        loader.style.opacity = 0;
    }, 1200);

    setTimeout(() => {
        loader.style.display = "none";
    }, 1400);
    
})

//footer
let footerElems = document.querySelectorAll(".footer-company-about");
let wrappers = document.querySelectorAll(".footer-about-wrapper");
wrappers[0].addEventListener("mouseover", function(){
    footerElems[0].classList.add("footer-company-about-hover");
})
wrappers[0].addEventListener("mouseout", function(){
    footerElems[0].classList.remove("footer-company-about-hover");
})
wrappers[1].addEventListener("mouseover", function(){
    footerElems[1].classList.add("footer-company-about-hover");
})
wrappers[1].addEventListener("mouseout", function(){
    footerElems[1].classList.remove("footer-company-about-hover");
})
wrappers[0].addEventListener("focus", function(){
    footerElems[2].classList.add("footer-company-about-hover");
})
wrappers[0].addEventListener("blur", function(){
    footerElems[2].classList.remove("footer-company-about-hover");
})
wrappers[3].addEventListener("focus", function(){
    footerElems[3].classList.add("footer-company-about-hover");
})
wrappers[3].addEventListener("blur", function(){
    footerElems[3].classList.remove("footer-company-about-hover");
})

let footerDropdownHeaders = document.querySelectorAll(".small-footer .footer-dropdown-header");
let footerDropdownContent = document.querySelectorAll(".small-footer .drop-down-content");
let DropdownIcon = document.querySelectorAll(".dropdownicon");

console.log("Number of DropdownIcon:", DropdownIcon[0]);

for (var ind = 0; ind < footerDropdownHeaders.length; ind++) {
    (function(index) { // Using an immediately invoked function expression (IIFE) to capture the current value of 'ind'
        footerDropdownHeaders[index].addEventListener('click', function() {
            footerDropdownHeaders[index].classList.toggle('open');
            x = footerDropdownContent[index].style.maxHeight;
            y = parseInt(x,10);
            console.log(x);
            if(y == 200){
                DropdownIcon[index].style.transform = "rotate(0deg)";
                footerDropdownContent[index].style.maxHeight = "0px";
            }else{
                DropdownIcon[index].style.transform = "rotate(180d)";
                footerDropdownContent[index].style.maxHeight = "200px";
            }
        });

    })(ind);
}

for (var ind = 0; ind < footerDropdownHeaders.length; ind++) {
    (function(index) { // Using an immediately invoked function expression (IIFE) to capture the current value of 'ind'
        document.addEventListener('click', function(event) {
            let aa = footerDropdownContent[index].contains(event.target);
            let bb = footerDropdownHeaders[index].contains(event.target);
            if (!aa && !bb) {
              if(footerDropdownHeaders[index].classList.contains('open')){
                footerDropdownHeaders[index].classList.remove('open');
                footerDropdownContent[index].style.maxHeight = "0px";
                DropdownIcon[index].style.transform = "rotate(0deg)";
              }
            }
          });
    })(ind);
}

