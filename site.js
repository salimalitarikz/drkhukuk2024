document.querySelector("#hero_video").playbackRate = 1;


// Initial state
var scrollPos = 100;
// adding scroll event
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one

  if (window.scrollY>300) {
    document.getElementById("nav").classList.add("nav_passive");
    if ((document.body.getBoundingClientRect()).top < scrollPos)
        document.getElementById("nav").classList.remove("nav_active");
    
        else
        document.getElementById("nav").classList.add("nav_active");
        // saves the new position for iteration.
        scrollPos = (document.body.getBoundingClientRect()).top;
  }else{
    document.getElementById("nav").classList.remove("nav_active");
    document.getElementById("nav").classList.remove("nav_passive");
  }
  
});

