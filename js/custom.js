    document.addEventListener("DOMContentLoaded", function() {
      // Get current year
      function getYear() {
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        document.querySelector("#displayYear").innerHTML = currentYear;
      }

      getYear();

      // Client section owl carousel
      if (typeof $ !== 'undefined' && $.fn.owlCarousel) {
        $(".client_owl-carousel").owlCarousel({
          loop: true,
          margin: 0,
          dots: false,
          nav: true,
          navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
          ],
          autoplay: true,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            },
            1000: {
              items: 2
            }
          }
        });
      } else {
        console.error("Owl Carousel or jQuery is not loaded.");
      }

      // Intersection Observer for lazy-loading and sliding in images
     const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelector('img').classList.add("visible"); // Add class to trigger animation
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  }, { threshold: 0.1 }); // Adjust threshold as needed

  const images = document.querySelectorAll(".doctor_section .box");
  images.forEach(image => {
    observer.observe(image); // Start observing each image box
     });
});

    function myMap() {
      // The location of the address you provided
      const addressLocation = { lat: 7.25256, lng: 5.19312 };
      
      // The map, centered at the address location
      const map = new google.maps.Map(document.getElementById("googleMap"), {
        zoom: 15,
        center: addressLocation,
      });
      
      // The marker, positioned at the address location
      const marker = new google.maps.marker.AdvancedMarkerElement({
        position: addressLocation,
        map: map,
        title: '66MC+QF8, Oda Rd, Akure 340283, Ondo'
      });
    }