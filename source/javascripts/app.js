//= require jquery
//= require bootstrap-sprockets
//= require_tree .

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "30px 10px";
//     document.getElementById("logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("navbar").style.padding = "80px 10px";
//     document.getElementById("logo").style.fontSize = "35px";
//   }
// }
// $(document).ready(function() {

//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){

//         /* Check the location of each desired element */
//         $('.hideme').each( function(i){

//             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();

//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){

//                 $(this).animate({'opacity':'1'},600);

//             }

//         });

//     });

// });
