const navSlide = () => {
    const burger = document.querySelector('.page-cont-burger');
    const nav = document.querySelector('.navlinks-left');
    const navLinks = document.querySelectorAll('.navlinks-left li');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('.nav-active');

        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation=`navLinkFade 0.5s ease forwards ${index /7 + 0.7}s`;
            }
        });
        burger.classList.toggle('toggle');
    });

}
navSlide();