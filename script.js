const track = document.getElementById('carousel');
let index = 0;

// Each image is 100px wide + 10px gap between (except the last one)
const imgWidth = 550; 
const visibleCount = 2;
const totalImages = track.children.length;
const maxIndex = totalImages - visibleCount;
function scrollCarousel(direction) {
    index += direction;
    
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;

    
    track.style.transform = `translateX(-${index * imgWidth}px)`;
}
const sections = document.querySelectorAll("section[id].content");

function scrollTracker() {
  const currentYScroll = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const id = section.getAttribute("id");
    const currentNavLink = document.querySelector(`.navbar a[href*="#${id}"]`);
    if (
      currentYScroll > sectionTop &&
      currentYScroll <= sectionTop + sectionHeight
    ) {
      currentNavLink.classList.add("active");
    } else {
      currentNavLink.classList.remove("active");
    }
  });
}
function stickyNav() {
    var headerHeight = document.querySelector("#about").offsetHeight / 2;
    var navbar = document.querySelector("nav");
    var scrollValue = window.scrollY;
  
    if (scrollValue > headerHeight) {
      navbar.classList.add("header-sticky");
    } else {
      navbar.classList.remove("header-sticky");
    }
  }
  
  window.addEventListener("scroll", stickyNav);    