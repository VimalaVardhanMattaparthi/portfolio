const iconToggle=document.querySelector('.toggle_icon');
const navbarMenu=document.querySelector('.menu');
const menuLinks=document.querySelectorAll('.menu_link');
const iconClose=document.querySelector('.close_icon');

iconToggle.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('active');
})

iconClose.addEventListener('click', ()=>{
    navbarMenu.classList.remove('active');   
})

menuLinks.forEach((menuLink)=>{
    menuLink.addEventListener('click', ()=>{
        navbarMenu.classList.remove('active');
    })
})
function scrollHeader(){
    const header=document.getElementById('header');
    this.scrollY>=20? header.classList.add('active'): header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);


const sections=document.querySelectorAll('section[id]');
function scrollActive(){
    const scrollY = window.pageYOffset;
    sections.forEach(section=>{
        const sectionHeight=section.offsetHeight;
        const sectionTop=section.offsetTop - 50;

        let sectionId= section.getAttribute('id');

        if(scrollY > sectionTop && scrollY < sectionTop + sectionHeight){
            document.querySelector('.menu a[href *='+sectionId+']').classList.add('active-link');
        } 
        else{
            document.querySelector('.menu a[href *='+sectionId+']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);


//----------------resume scroll-------------------
const pages= document.querySelectorAll('.page');
const resume=document.querySelector('.resume');

function resumeActive(){
    const scrollY= window.pageYOffset;

    pages.forEach(page=>{
        const sectionHeight=page.offsetHeight;
        const sectionTop=page.offsetTop;

        let sectionId= page.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop+ sectionHeight){
            document.querySelector('.resume_tabs a[href *=' + sectionId+ ']').classList.add('current');
        }
        else{
            document.querySelector('.resume_tabs a[href *=' + sectionId+ ']').classList.remove('current');
        }
    })
}

window.addEventListener('scroll', resumeActive);
const profileImg = document.querySelector('#profile');

function zoomImage() {
    if (profileImg.classList.contains('zoom-in')) {
        profileImg.classList.remove('zoom-in');
        profileImg.classList.add('zoom-out');
    } else {
        profileImg.classList.remove('zoom-out');
        profileImg.classList.add('zoom-in');
    }
}

setInterval(zoomImage, 2000); 

// -------------------Services----------------------------
let modalBtns=document.querySelectorAll('.service_button'),
    modalViews=document.querySelectorAll('.services_modal'),
    modalClose=document.querySelectorAll('.fa-solid');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', ()=>{
        modal(i);
    })
})

modalClose.forEach(el =>{
    el .addEventListener('click', ()=>{
        modalViews.forEach(modalView=>{
            modalView.classList.remove('active-modal')
        })
    })
})









