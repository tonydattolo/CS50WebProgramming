$(document).ready(function () {

    // Scrollbar for Sidebar
    $('#sidebar, #content').slimScroll({
        alwaysVisible: false,
        height: '100vh',
        railColor: '#eab934ff',
    });


    $('.overlay').on('click', function() {
        // hide sidebar
        $('#sidebar').removeClass('switcheroo');
        // hide overlay
        $('.overlay').removeClass('switcheroo');
        
        $('.wrapper').removeClass('switcheroo');
    });

    $('#dismiss').click(function () {
        $('#sidebar').toggleClass('switcheroo');
        $('.overlay').toggleClass('switcheroo');
        
        $('.wrapper').toggleClass('switcheroo');
    });

    $('#sidebarCollapse').on('click', function () {
        // open sidebar
        $('#sidebar').toggleClass('switcheroo');
        // fade in the overlay
        $('.overlay').toggleClass('switcheroo');
        
        $('.wrapper').toggleClass('switcheroo');
        // $('#sidebar').toggleClass('switcheroo');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true').attr('aria-expanded','true');
    });

});


function openCity(evt, cityName) {
    let i;
    let tabcontent;
    let tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active","");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}



// function testerino() {
//     $('#sidebar').toggleClass('switcheroo');
// }