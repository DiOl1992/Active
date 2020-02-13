$(function() {
    /* FIXED HEADER */
    
  let header=$("#header");
  let intro=$("#intro"); 
  let introH;
  let scrollPos=$(window).scrollTop();  
  let nav=$("#nav");
  let navToggle=$("#navToggle");
    
    
  $(window).on("scroll load resize", function() {
      let introH=intro.innerHeight();
      scrollPos=$(this).scrollTop();
      
      if(scrollPos>introH) {
          header.addClass("fixed");
          
      } else {
          header.removeClass("fixed"); 
      }
      
  })    
  
    
  /* SCROLL */
  $("[data-scroll]").on("click", function(event) {
      event.preventDefault();
      let elementId=$(this).data("scroll");
      let elementoffset=$(elementId).offset().top;
      
      nav.removeClass("show");
      
      
      $("html, body").animate({
          scrollTop: elementoffset -70
      },700);
  } );
    
    
   
/*   navToggle*/
    navToggle.on("click", function(event) {
       event.preventDefault();
        
       nav.toggleClass("show");
        
    });
    
    
    /*reviewes*/
    
 let slider=$("#reviewsSlider");
    
    slider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade:true,
  arrows:false,
  dots:true
});
 
});