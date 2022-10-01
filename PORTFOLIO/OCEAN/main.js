var menu = document.querySelector('.menu-icons')
var navItems = document.querySelector('.nav-items ul')
var barIcon = document.querySelector('.bar')
var removeIcon = document.querySelector('.remove')

var mode = document.querySelector('.mode');
var container = document.querySelector('.container');
var body = document.querySelector('body');

menu.addEventListener('click', function() {
    navItems.classList.toggle('navBar-js')
    barIcon.classList.toggle('barIcon-js')
    removeIcon.classList.toggle('removeIcon-js')
})

mode.addEventListener('click',function(){
    container.classList.toggle('container-js');
    body.classList.toggle('body-js');
    mode.classList.toggle('mode-js')
});
