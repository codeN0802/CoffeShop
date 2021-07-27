var myheader = document.getElementById('header')
var mobileMenu = document.getElementById('mobile-menu-nav');
var heiderheight = myheader.clientHeight
mobileMenu.onclick = function(){
    var isOpen = myheader.clientHeight === heiderheight;
    if(isOpen){
        myheader.style.height = 'auto';
    }else{
        myheader.style.height = null;
    }
}