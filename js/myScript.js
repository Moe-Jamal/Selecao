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
const navLinks = document.getElementById('navBar');
document.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        navLinks.classList.add('scrollbg');
    } else {
        navLinks.classList.remove('scrollbg');
    }
})

// portfolio active change and filter portfolio
let myPort = document.querySelectorAll('.port-btn');
let myGallery = document.querySelectorAll('.port-box');

const filterCards = ele => {
    document.querySelector('.active-btn').classList.remove('active-btn');
    ele.target.classList.add('active-btn');

    myGallery.forEach(gallery => {
        gallery.classList.add('hide');

        if(gallery.dataset.name === ele.target.dataset.name || ele.target.dataset.name === "all") {
            gallery.classList.remove('hide');
        }
    })
}

myPort.forEach(button => button.addEventListener('click', filterCards))