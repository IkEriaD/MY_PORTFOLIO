
// =================== SHOW MENU =======================
const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.nav-toggle');
const navClose = document.querySelector('.nav-close');

// ======= MENU SHOW ========
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}


// =====MENU HIDDEN =======
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}


// =====LOAD MORE BUTTON =======
let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 2;

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll('.main-portfolio .portfolio .frames')];
  for (let i = currentItem; i < currentItem + 2 && i < boxes.length; i++) {
    boxes[i].style.display = 'inline-block'; // Display items if within range
  }
  currentItem += 2;

  // Hide the button if we've reached or exceeded the number of available items
  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none';
  }
};

  




/*=============== SCROLL REVEAL ANIMATION ==============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, // Animation repeat
   })
  
   sr.reveal(`.about-item`, {
    origin: "top"
})

   sr.reveal(`.IMG2`, {
    origin: 'top'
})

   sr.reveal(`.skills-h1`, {
    origin: 'top'
})

   sr.reveal(`.skills-p`, {
    origin: 'bottom',
})

   sr.reveal(`.skills-icons div`, {
    origin: 'bottom',
    delay: 300,
    interval: 100
})

   sr.reveal(`.portfolio-h1`, {
    origin: 'top',
})

   sr.reveal(`.frame1, .frames`, {
    origin: 'top',
    interval: 150
})

   sr.reveal(`.certification`, {
    origin: 'top',
    interval: 100
})

   sr.reveal(`.alt-school`, {
    origin: 'left',
    interval: 100
})

   sr.reveal(`.regonent`, {
    origin: 'left',
    interval: 100
})

   sr.reveal(`.education`, {
    origin: 'top',
    interval: 100
})

   sr.reveal(`.school`, {
    origin: 'right',
    interval: 100
})

   sr.reveal(`.input-h1`, {
    origin: 'bottom',
    interval: 200
})

   sr.reveal(`.inputs`, {
    origin: 'bottom',
    interval: 100
})

   sr.reveal(`.details div`, {
    origin: 'right',
    interval: 200
})


  