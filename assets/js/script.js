
// window.onload = function() {
// }


// window.addEventListener('load', function () {

// });



window.addEventListener('scroll', function(e) {
    var showHeaderAt = 150;
    var body = document.body;
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(currentScroll > showHeaderAt) {
        body.classList.add('fixed');
    } else {
        body.classList.remove('fixed');
    }
});


function toggleMenu($btn) {
    if(window.innerWidth <= 768) {
        var menu = document.getElementById("mainMenu");
        if(menu.className === 'stfy-main-menu') {
            menu.className += " responsive";
        } else {
            menu.className = "stfy-main-menu";

        }
       
    }
}
