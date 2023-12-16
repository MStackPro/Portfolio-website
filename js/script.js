const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

// open and close of nav using hamburger menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  menu.style.display = "block";
});

// close nav menu when items are click
if (window.innerWidth < 1024) {
  document.querySelectorAll(".nav-menu").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      menu.style.display = "none";
    })
  );
}

// close nav menu when outside the menu is clicked
// document.addEventListener('click', function(event) {
//   const isClickInsideMenu = menu.contains(event.target);
//   if (!isClickInsideMenu) {
//     menu.style.display = 'none';
//   }
// })

// =============== expanded text ====================

let noOfCharac = 150;
let contents = document.querySelectorAll(".content");
contents.forEach(content => {
    //If text length is less that noOfCharac... then hide the read more button
    if(content.textContent.length < noOfCharac){
        content.nextElementSibling.style.display = "none";
    }
    else{
        let displayText = content.textContent.slice(0,noOfCharac);
        let moreText = content.textContent.slice(noOfCharac);
        content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
    }
});

function expandedText(btn){
    let card = btn.parentElement;
    card.querySelector(".dots").classList.toggle("hide");
    card.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Read less" ? btn.textContent = "Read more" : btn.textContent = "Read less";
}

// ===================== SCROLL UP ====================

const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  // when the scroll is higher than 350vh, add the show-scroll class to display
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
  :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// SCROLL SECTIONS ACTIVE LINK

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const  sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

// ========================= SCROLL REVEAL ANIMATION =====================
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true // Animations repeat

})
sr.reveal(`.hero, .socials, footer, .contact-left, form, .brand-container`)
sr.reveal(`.about-image, .logo-container`, {origin: 'right'})
sr.reveal(`#about, .services-container, .portfolio-container, .graphics-projects`, {origin: 'left'})
