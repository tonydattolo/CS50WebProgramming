// sticky nav menu
$(document).ready(function (){


    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function() {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});

const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('input', (e) => {
	const isChecked = e.target.checked;
	
	if(isChecked) {
		body.classList.add('dark-theme');
	} else {
		body.classList.remove('dark-theme');
	}
});

function morpheus() {
    var element = document.getElementById('mellamo');
    // var element = document.getElementsByClassName('navbar-brand');
    element.classList.add('darkness');
}