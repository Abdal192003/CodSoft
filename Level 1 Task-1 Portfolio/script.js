function toggleMenu() {
    let menu=document.querySelector(".menu-links");
    let icon=document.querySelector(".hamburger-icon");
    // toggle is built-in method used to add or remove classes
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
var typed = new Typed('.type-ani', {
    strings: ['Web Development',
             'AI/ML'],
    loop: true,
    backSpeed:60,
    typeSpeed:80
     // Default value
  });
