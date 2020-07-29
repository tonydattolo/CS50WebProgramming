$(document).ready(function () {

    // Scrollbar for Sidebar
    $('#sidebar').slimScroll({
        alwaysVisible: true,
        height: '100vh',
        railColor: '#eab934ff',
    });

    $('.overlay').on('click', function() {
        // hide sidebar
        $('#sidebar').removeClass('switcheroo');
        // hide overlay
        $('.overlay').removeClass('switcheroo');
    });

    $('#dismiss').click(function () {
        $('#sidebar').toggleClass('switcheroo');
        $('.overlay').toggleClass('switcheroo');
    });

    $('#sidebarCollapse').on('click', function () {
        // open sidebar
        $('#sidebar').toggleClass('switcheroo');
        // fade in the overlay
        $('.overlay').toggleClass('switcheroo');
        // $('#sidebar').toggleClass('switcheroo');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true').attr('aria-expanded','true');
    });

});


// function testerino() {
//     $('#sidebar').toggleClass('switcheroo');
// }