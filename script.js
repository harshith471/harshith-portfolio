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
  
window.addEventListener('scroll', reveal);

function reveal(){
  var reveals =document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }

}