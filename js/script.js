$(document).ready(function() {

  // ----------- TABLET AND MOBILE NAVIGATION --------------- //

  $( ".toggle-button" ).click(function() {
     $( ".nav" ).slideToggle(300)//duration of 300
  });

  $('.toggle-button').on('click', function() {
      this.classList.toggle('change');//changing nav style: from hamburger to x
  });


  // ----------- BACK TO TOP ------------ //

  var topButton = $('.to-top');

      //Show to-top button when html reaches 450
      $(window).scroll(function(){
        if ($(this).scrollTop() > 450){
          topButton.fadeIn();
        }
        else {       
          topButton.fadeOut();
        }
      });

      //Scroll top function
      topButton.click(function(event){
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 500);
        return false;
      }); 

});

