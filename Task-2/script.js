let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}






//Scroll section

let sections= document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');

window.onscroll =()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //animation on scroll
            sec.classList.add('showAnimate');
        }
        else{
            sec.classList.remove('showAnimate');
        }
    });

    //sticky header
    let header= document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle navbar
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');



    //footer animation
    let footer = document.querySelector('footer');

    footer.classList.toggle('showAnimate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
}