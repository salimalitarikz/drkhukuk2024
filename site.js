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



function toggleMenu() {
    document.getElementById("menu").classList.toggle("menu_active");
}



// Tüm <p> etiketlerini seç
const paragraphs = document.querySelectorAll('p');

// Intersection Observer opsiyonlarını ayarla
const options = {
  threshold: .2 // Görünürlüğün %10 olduğunda tetiklenecek
};

// Intersection Observer callback fonksiyonu
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // <p> etiketine "activated_p" sınıfını ekle
      entry.target.classList.add('activated_p');
      // Eğer bir kez eklenmesini istiyorsanız, observe etmeyi bırakabilirsiniz:
      // observer.unobserve(entry.target);
    }else{
      entry.target.classList.remove('activated_p');
    }
  });
};

// Observer oluştur ve paragraf elemanlarını gözlemle
const observer = new IntersectionObserver(observerCallback, options);
paragraphs.forEach(paragraph => observer.observe(paragraph));



// Tüm services_card elemanlarını seçiyoruz
const servicesCards = document.querySelectorAll('.services_card');

// Her bir eleman için olay dinleyicisi ekliyoruz
servicesCards.forEach(card => {
  card.addEventListener('click', () => {
    // Eğer eleman 'services_card_active' sınıfına sahipse, kaldırıyoruz; değilse ekliyoruz
    card.classList.toggle('services_card_active');
  });
});





// swiper


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 400,
  spaceBetween: 50,


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});