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

var mybutton = document.getElementById("mybtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function changecolor(){
  
  var scrollValue = window.scrollY;
  
  if(scrollValue < 400 ){
    myheader.classList.remove('bgColor');
    myheader.classList.add('bgColorx')
  }else{
    myheader.classList.remove('bgColorx');
    myheader.classList.add('bgColor');
  }
}
window.addEventListener('scroll',changecolor);