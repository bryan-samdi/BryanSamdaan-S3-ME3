document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".button").forEach(function(button) {
      button.addEventListener("click", function() {
        document.querySelectorAll(".button").forEach(function(btn) {
          btn.classList.remove("active");
        });
        this.classList.add("active");
        var carouselToShow = this.getAttribute("data-carousel");
        document.querySelectorAll(".carousel").forEach(function(carousel) {
          carousel.classList.add("d-none");
          carousel.classList.remove("active");
        });

        var activeCarousel = document.getElementById(carouselToShow);
        activeCarousel.classList.remove("d-none");
        activeCarousel.classList.add("active");
      });
    });
  });

  (function($) {
    var $animation_elements = $('.et-waypoint'),
        $window = $(window);
 
    function check_if_in_view() {
        var window_height = $window.height(),
            window_top_position = $window.scrollTop(),
            window_bottom_position = (window_top_position + window_height);
 
        $animation_elements.each(function() {
            var $element = $(this),
                element_height = $element.outerHeight(),
                element_top_position = $element.offset().top,
                element_bottom_position = (element_top_position + element_height);
 
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                $element.addClass('et-animated');
            } else {
                $element.removeClass('et-animated');
            }
        });
    }
    $window.on('scroll resize', check_if_in_view);
})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".navbar-nav a").forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
      });
    });
  
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-nav a");
  
    window.addEventListener("scroll", function() {
      let currentSection = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; 
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === currentSection) {
          link.classList.add("active");
        }
      });
    });
  });