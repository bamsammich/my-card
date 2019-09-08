// $(function () {

//   // Vars.
//   var $window = $(window),
//     $body = $('body'),
//     $wrapper = $('#wrapper');

//   // Breakpoints.
//   skel.breakpoints({
//     xlarge: '(max-width: 1680px)',
//     large: '(max-width: 1280px)',
//     medium: '(max-width: 980px)',
//     small: '(max-width: 736px)',
//     xsmall: '(max-width: 480px)'
//   });

//   // Disable animations/transitions until everything's loaded.
//   $body.addClass('is-loading');

//   $window.on('load', function () {
//     $body.removeClass('is-loading');
//   });

//   // Poptrox.
//   $window.on('load', function () {

//     $('.thumbnails').poptrox({
//       onPopupClose: function () { $body.removeClass('is-covered'); },
//       onPopupOpen: function () { $body.addClass('is-covered'); },
//       baseZIndex: 10001,
//       useBodyOverflow: false,
//       usePopupEasyClose: true,
//       overlayColor: '#000000',
//       overlayOpacity: 0.75,
//       popupLoaderText: '',
//       fadeSpeed: 500,
//       usePopupDefaultStyling: false,
//       windowMargin: (skel.breakpoint('small').active ? 5 : 50)
//     });
//   });
// });

$(document).ready(function () {
  $("div.container-fluid.body").load(("html/home.html"));

  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });

  $('.container-fluid.body').css('min-height', screen.height);

  $('.nav-item').on('click', function () {
    $('li').removeClass('active');
    $(("li#" + this.id)).addClass('active');
    console.log(("li#" + this.id))
    console.log(("html/" + this.id + ".html"));
    $("div.container-fluid.body").load(("html/" + this.id + ".html"));
  });
});