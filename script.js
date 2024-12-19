const openMenu = document.getElementById('navOpen');
const closeMenu = document.getElementById('navClose');
const menu = document.querySelector('.mobile-nav');
const overlay = document.getElementById('filter');

openMenu.addEventListener('click',()=>{
    menu.style.right = '0';
    overlay.style.display = 'block';
    document.body.style.overflowY = 'hidden';    
})
closeMenu.addEventListener('click',()=>{
    menu.style.right = '-70vw';
    overlay.style.display = 'none';
    document.body.style.overflowY = 'auto';    
})