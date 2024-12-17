$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:true,
    
    //   autoplay:true,
    //   autoplayTimeout:3000,
    //   autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          800:{
            item:2
          },
          1000:{
              items:3
          }
      }
    });
  });



// For trip calculator
var total = document.getElementById("total");
total.addEventListener("click", () => {
    let valTravel = parseInt(document.getElementById("travel").value);
    let valHotel = parseInt(document.getElementById("hotel").value);
    let valFood = parseInt(document.getElementById("food").value);
    document.getElementById("total-money").value = valTravel + valHotel + valFood;
});



