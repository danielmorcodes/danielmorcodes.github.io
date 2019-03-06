/*============= CLOSE MOBILE NAV ON CLICK =============*/

$(document).ready(function()  {
   $(document).click(function  (event) {
     var clickover = $(event.target);
     var _opened = $(".navbar-collapse").hasClass("show");
     if (_opened === true && !clickover.hasClass("navbar-toggler")) {
       $(".navbar-toggler").click();
     }
   });
 });
 
 

 $(document).ready(function()  {
  $(window).scroll(function() {
    if($(this).scrollTop()  > 300)  {
      $('.navbar').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
    }
  });
});



