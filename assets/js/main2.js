/** =======================================================
* Template Name: MyPT
* Updated: April 2024
* Author: OmarJaber
* Project
======================================================== **/

(function() {
  "use strict";

  /**
   * Helper functions
   */
  const select = (el, all = false) => {
      el = el.trim();
      return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
  };

  const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
          if (all) {
              selectEl.forEach(e => e.addEventListener(type, listener));
          } else {
              selectEl.addEventListener(type, listener);
          }
      }
  };

  const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true);
  const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach(navbarlink => {
          if (!navbarlink.hash) return;
          let section = select(navbarlink.hash);
          if (!section) return;
          if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
              navbarlink.classList.add('active');
          } else {
              navbarlink.classList.remove('active');
          }
      });
  };
  window.addEventListener('load', navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scroll to an element with header offset
   */
  const scrollto = (el) => {
      let elementPos = select(el).offsetTop;
      window.scrollTo({
          top: elementPos,
          behavior: 'smooth'
      });
  };

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top');
  if (backtotop) {
      const toggleBacktotop = () => {
          backtotop.classList.toggle('active', window.scrollY > 100);
      };
      window.addEventListener('load', toggleBacktotop);
      onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
      select('body').classList.toggle('mobile-nav-active');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
  });

  /**
   * Scroll with offset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
          e.preventDefault();

          let body = select('body');
          if (body.classList.contains('mobile-nav-active')) {
              body.classList.remove('mobile-nav-active');
              select('.mobile-nav-toggle').classList.toggle('bi-list');
              select('.mobile-nav-toggle').classList.toggle('bi-x');
          }
          scrollto(this.hash);
      }
  }, true);

  /**
   * Scroll with offset on page load with hash links in the URL
   */
  window.addEventListener('load', () => {
      if (window.location.hash && select(window.location.hash)) {
          scrollto(window.location.hash);
      }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
      window.addEventListener('load', () => {
          preloader.remove();
      });
  }

  /**
   * Hero type effect
   */
  const typed = select('.typed');
  if (typed) {
      let typed_strings = typed.getAttribute('data-typed-items').split(',');
      new Typed('.typed', {
          strings: typed_strings,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000
      });
  }

  /**
   * Schedule generation
   */
  document.addEventListener("DOMContentLoaded", function() {
      const scheduleContainer = document.getElementById("schedule");
      const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      for (let i = 0; i < 7; i++) {
          const day = days[i];
          const daySchedule = document.createElement("div");
          daySchedule.classList.add("day-schedule");
          daySchedule.innerHTML = `<h4>${day}</h4>`;

          const exerciseForm = document.createElement("form");
          exerciseForm.innerHTML = `
              <label for="exercise-name-${i}">Exercise Name:</label>
              <input type="text" id="exercise-name-${i}" required>
              <label for="rest-time-${i}">Rest Time (in seconds):</label>
              <input type="number" id="rest-time-${i}" required>
              <label for="rep-time-${i}">Rep Time (in seconds):</label>
              <input type="number" id="rep-time-${i}" required>
              <label for="total-reps-${i}">Total Reps:</label>
              <input type="number" id="total-reps-${i}" required>
              <button type="button" id="add-exercise-${i}">Add Exercise</button>
              <ul id="exercise-list-${i}" class="exercise-list"></ul>
              <p>Total Time: <span id="total-time-${i}">0</span> seconds</p>
          `;
          daySchedule.appendChild(exerciseForm);
          scheduleContainer.appendChild(daySchedule);

          const addExerciseBtn = document.getElementById(`add-exercise-${i}`);
          const exerciseList = document.getElementById(`exercise-list-${i}`);
          const totalTimeDisplay = document.getElementById(`total-time-${i}`);
          addExerciseBtn.addEventListener("click", function() {
              const exerciseName = document.getElementById(`exercise-name-${i}`).value;
              const restTime = parseInt(document.getElementById(`rest-time-${i}`).value);
              const repTime = parseInt(document.getElementById(`rep-time-${i}`).value);
              const totalReps = parseInt(document.getElementById(`total-reps-${i}`).value);
              const totalTime = (restTime + repTime) * totalReps;
              totalTimeDisplay.textContent = parseInt(totalTimeDisplay.textContent) + totalTime;
              const exerciseItem = document.createElement("li");
              exerciseItem.textContent = `${exerciseName} (Rest: ${restTime}s, Rep: ${repTime}s, Total Reps: ${totalReps})`;
              exerciseList.appendChild(exerciseItem);
          });
      }
  });

  /**
   * Schedule Button
   */
  document.addEventListener("DOMContentLoaded", function() {
      const schedulePopup = document.getElementById("schedulePopup");
      const schedulePopupBtn = document.getElementById("schedulePopupBtn");
      schedulePopupBtn.addEventListener("click", function(event) {
          event.preventDefault();
          schedulePopup.style.display = "block";
      });
      const closeBtn = schedulePopup.querySelector(".Close");
      closeBtn.addEventListener("click", function() {
          schedulePopup.style.display = "none";
      });
      window.addEventListener("click", function(event) {
          if (event.target === schedulePopup) {
              schedulePopup.style.display = "none";
          }
      });
  });

  /**
   * Skills animation
   */
  let skillsContent = select('.skills-content');
  if (skillsContent) {
      new Waypoint({
          element: skillsContent,
          offset: '80%',
          handler: function(direction) {
              let progress = select('.progress .progress-bar', true);
              progress.forEach((el) => {
                  el.style.width = el.getAttribute('aria-valuenow') + '%';
              });
          }
      });
  }

  /**
   * Portfolio isotope and filter
   */
  window.addEventListener('load', () => {
      let portfolioContainer = select('.portfolio-container');
      if (portfolioContainer) {
          let portfolioIsotope = new Isotope(portfolioContainer, {
              itemSelector: '.portfolio-item'
          });

          let portfolioFilters = select('#portfolio-flters li', true);

          on('click', '#portfolio-flters li', function(e) {
              e.preventDefault();
              portfolioFilters.forEach(function(el) {
                  el.classList.remove('filter-active');
              });
              this.classList.add('filter-active');
              portfolioIsotope.arrange({
                  filter: this.getAttribute('data-filter')
              });
              portfolioIsotope.on('arrangeComplete', function() {
                  AOS.refresh();
              });
          }, true);
      }
  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
      selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
      selector: '.portfolio-details-lightbox',
      width: '90%',
      height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
      speed: 400,
      loop: true,
      autoplay: {
          delay: 5000,
          disableOnInteraction: false
      },
      pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
      }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
          delay: 5000,
          disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
      }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
      AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
          mirror: false
      });
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})();

document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("edit-profile-popup");
  var btn = document.querySelector(".edit-profile-button");
  var span = document.querySelector(".close");
  btn.addEventListener("click", function() {
      modal.style.display = "block";
  });
  span.addEventListener("click", function() {
      modal.style.display = "none";
  });
  window.addEventListener("click", function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  });
  var form = document.getElementById("edit-profile-form");
  form.addEventListener("submit", function(event) {
      event.preventDefault();
      modal.style.display = "none";
      // Perform form submission actions here
  });
});