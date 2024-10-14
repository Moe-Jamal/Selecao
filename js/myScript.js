AOS.init({
    once: true,
    duration: 800,
    offset: 175,
    easing: 'ease-in-out',
});
// Link Active changer 
let myLink = document.querySelectorAll('.main-link');
myLink.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.active-link').classList.remove('active-link');
        link.classList.add("active-link");
    })
})
// Box active change 
let myBox = document.querySelectorAll('.box-about');
myBox.forEach(box => {
    box.addEventListener('click', () => {
        document.querySelector('.box-active').classList.remove('box-active');
        box.style.cssText = "transition: none;"
        box.classList.add('box-active');
    })
})
// Show/Hide about continet 
let boxes = document.querySelectorAll('.box');
let contentBoxes = document.querySelectorAll('.box-containt');
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        // Hide all content boxes
        contentBoxes.forEach(content => {
        content.style.cssText = "display: none !important;";
        });
        
        // Show the clicked box's corresponding content
        contentBoxes[index].style.cssText = "display: flex !important;";
    });
});

// Change Nav Bg-Color On scroll 
const navBar = document.getElementById('navBar');
document.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        navBar.classList.add('scrollbg');
    } else {
        navBar.classList.remove('scrollbg');
    }
})

// portfolio active change and filter portfolio
let myPort = document.querySelectorAll('.port-btn');
let myGallery = document.querySelectorAll('.port-box');
let galleryParent = document.querySelector('.image-container');
const filterCards = ele => {
    document.querySelector('.active-btn').classList.remove('active-btn');
    ele.target.classList.add('active-btn');
    myGallery.forEach(gallery => {
        gallery.classList.add('hide');
        if(gallery.dataset.name === ele.target.dataset.name || ele.target.dataset.name === "all") {
            gallery.classList.remove('hide');
        }
        // if (ele.target.dataset.name !== "all") {
        //     galleryParent.style.cssText = "flex-direction: row !important;"
        // } else if (ele.target.dataset.name === "all") {
        //     galleryParent.style.cssText = "flex-direction: column !important;"
        // }
    })
}

myPort.forEach(button => button.addEventListener('click', filterCards))

// scroll to top button 
let span = document.querySelector(".top");

window.onscroll = function () {
    if (this.scrollY >= 300) {
        span.classList.add("show");
    } else {
        span.classList.remove("show");
    }
};
span.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})

// testimonials slider 
var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        speed: 800,
        grabCursor: 'true',
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});

// Test 

  // Select all sections and navbar links
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-nav a');

  // Function to remove 'active' class from all links
  function removeActiveClass() {
    navLinks.forEach(link => link.classList.remove('active-link'));
  }

  // Function to add 'active' class to the current link
  function addActiveClass(id) {
    const activeLink = document.querySelector(`.navbar-nav a[href="#${id}"]`);
    if (activeLink) {
      activeLink.classList.add('active-link');
    }
  }

  // Scroll event listener
  window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      // Check if the section is in the viewport
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    // Update the active class on the navbar
    removeActiveClass();
    addActiveClass(currentSection);
  });