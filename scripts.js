// JavaScript to adjust scroll position for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
        const targetElement = document.getElementById(targetId); // Get the section element
        const headerOffset = 30; // Adjust this value to your header height (if necessary)
        const elementPosition = targetElement.getBoundingClientRect().top; // Get the position of the section
        const offsetPosition = elementPosition - headerOffset;
  
        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
  });
  




  
// Show the button when scrolling down 100px
window.onscroll = function() {
    let arrow = document.querySelector('.top-arrow');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        arrow.style.display = "block";
    } else {
        arrow.style.display = "none";
    }
};

// Arrow up: Smooth scroll to the hero section
document.querySelector('.top-arrow').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#hero').scrollIntoView({ 
        behavior: 'smooth' 
    });
});





function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const overlay = document.getElementById('overlay');

    mobileNav.classList.toggle('open');
    overlay.classList.toggle('active');
}









document.querySelectorAll('.faq-question').forEach(function(question) {
    question.addEventListener('click', function() {
        this.classList.toggle('active');  // Toggle active state on click
    });
});






function toggleMobileMenu() {
    const mobileNav = document.getElementById("mobileNav");
    const overlay = document.getElementById("overlay");
    const menuIcon = document.getElementById("menu-icon");

    // Toggle the menu and overlay
    mobileNav.classList.toggle("open");
    overlay.classList.toggle("active");

    // Toggle the menu icon between burger and close
    if (menuIcon.classList.contains("fa-bars")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
    } else {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    }
}








document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".services-slider-slide");
    const sliderWrapper = document.querySelector(".services-slider-wrapper");
    const nextBtn = document.querySelector(".services-slider-button-next");
    const prevBtn = document.querySelector(".services-slider-button-prev");
  
    const slideWidth = slides[0].offsetWidth + 15; // Slide width + gap
    const totalSlides = slides.length;
    let currentSlide = totalSlides; // Start at the first real slide
    let isTransitioning = false;
  
    // Clone first and last few slides for seamless loop
    for (let i = 0; i < totalSlides; i++) {
      const cloneFirst = slides[i].cloneNode(true);
      const cloneLast = slides[totalSlides - 1 - i].cloneNode(true);
      sliderWrapper.appendChild(cloneFirst); // Append clones to the end
      sliderWrapper.insertBefore(cloneLast, slides[0]); // Prepend clones to the start
    }
  
    // Update slider wrapper width
    const allSlides = document.querySelectorAll(".services-slider-slide");
    sliderWrapper.style.width = `${allSlides.length * slideWidth}px`;
  
    // Set initial position
    sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  
    // Handle transition end for infinite loop (no changes needed here)
    sliderWrapper.addEventListener("transitionend", () => {
      if (currentSlide >= allSlides.length - totalSlides) {
        currentSlide = totalSlides; // Reset to the first real slide
        sliderWrapper.style.transition = "none";
        sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      } else if (currentSlide < totalSlides) {
        currentSlide = allSlides.length - totalSlides * 2; // Reset to the last real slide
        sliderWrapper.style.transition = "none";
        sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      }
      isTransitioning = false;
    });
  
    // Update slider position
    function updateSlider() {
      if (isTransitioning) return;
      isTransitioning = true;
      sliderWrapper.style.transition = "transform 0.4s ease-in-out";
      sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  
    // Navigation buttons
    nextBtn.addEventListener("click", () => {
      if (isTransitioning) return;
      currentSlide++;
      updateSlider();
    });
  
    prevBtn.addEventListener("click", () => {
      if (isTransitioning) return;
  
      // Check if we're within the cloned slides at the beginning
      if (currentSlide <= totalSlides) {
        // If so, wrap around to the last real slide
        currentSlide = allSlides.length - totalSlides - 1; // -1 to avoid showing the actual last slide
      } else {
        currentSlide--;
      }
  
      updateSlider();
    });
  
    // Resize handling
    window.addEventListener("resize", () => {
      sliderWrapper.style.transition = "none"; // Prevent jerky movement
      sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    });
  });











  document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const popupBox = document.querySelector(".popup-box");
    const closeBtn = document.getElementById("popupClose");
    const dontShowAgainCheckbox = document.getElementById("dontShowAgain");
  
    // Show the popup after 2 seconds
    setTimeout(() => {
      if (!localStorage.getItem("dontShowPopup")) {
        popup.classList.add("show");
      }
    }, 60000); // 60 seconds
  
    // Close popup functionality
    closeBtn.addEventListener("click", () => {
      closePopup();
    });
  
    // Close popup when clicking outside the popup box
    document.addEventListener("click", (event) => {
      if (popup.classList.contains("show") && !popupBox.contains(event.target)) {
        closePopup();
      }
    });
  
    // Function to close the popup
    function closePopup() {
      popup.classList.remove("show");
      if (dontShowAgainCheckbox.checked) {
        localStorage.setItem("dontShowPopup", true);
      }
    }
  });
  