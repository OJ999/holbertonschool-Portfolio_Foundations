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

  document.addEventListener('DOMContentLoaded', (event) => {
    const messagesLink = document.getElementById('messages-link');
    const friendsLink = document.getElementById('friends-link');
    const messagesModal = document.getElementById('messages-modal');
    const friendsModal = document.getElementById('friends-modal');
    const closeMessagesBtn = messagesModal.querySelector('.close');
    const closeFriendsBtn = friendsModal.querySelector('.close');
    const sendMessageBtn = document.getElementById('send-message');
    const messageInput = document.getElementById('message-input');
    const messagesContainer = document.getElementById('messages-container');
    const searchMessagesInput = document.getElementById('search-messages');
    const composeMessageBtn = document.getElementById('compose-message-btn');
    const searchFriendsInput = document.getElementById('search-friends');
    const friendsContainer = document.getElementById('friends-container');
    const addFriendBtn = document.getElementById('add-friend-btn');
  
    messagesLink.onclick = function() {
      messagesModal.style.display = "block";
    }
  
    friendsLink.onclick = function() {
      friendsModal.style.display = "block";
    }
  
    closeMessagesBtn.onclick = function() {
      messagesModal.style.display = "none";
    }
  
    closeFriendsBtn.onclick = function() {
      friendsModal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == messagesModal) {
        messagesModal.style.display = "none";
      }
      if (event.target == friendsModal) {
        friendsModal.style.display = "none";
      }
    }
  
    sendMessageBtn.onclick = function() {
      const message = messageInput.value.trim();
      if (message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        messageInput.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
    }
  
    searchMessagesInput.oninput = function() {
      const query = searchMessagesInput.value.toLowerCase();
      const messages = messagesContainer.querySelectorAll('div');
      messages.forEach(message => {
        if (message.textContent.toLowerCase().includes(query)) {
          message.style.display = '';
        } else {
          message.style.display = 'none';
        }
      });
    }
  
    composeMessageBtn.onclick = function() {
      messageInput.focus();
    }
  
    searchFriendsInput.oninput = function() {
      const query = searchFriendsInput.value.toLowerCase();
      const friends = friendsContainer.querySelectorAll('div');
      friends.forEach(friend => {
        if (friend.textContent.toLowerCase().includes(query)) {
          friend.style.display = '';
        } else {
          friend.style.display = 'none';
        }
      });
    }
  
    addFriendBtn.onclick = function() {
      const friendName = prompt("Enter the name of the new friend:");
      if (friendName) {
        const friendElement = document.createElement('div');
        friendElement.textContent = friendName;
        friendsContainer.appendChild(friendElement);
        friendsContainer.scrollTop = friendsContainer.scrollHeight;
      }
    }
  });
  

  




  /**
   * Schedule generation
   */
  document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("editModal");
    var editButtons = document.querySelectorAll(".edit-button");
    var closeBtn = document.querySelector("#editModal .close");
  
    var modalDayTitle = document.getElementById("modalDayTitle");
    var exerciseName = document.getElementById("exerciseName");
    var exerciseTime = document.getElementById("exerciseTime");
    var exerciseSets = document.getElementById("exerciseSets");
    var exerciseBreak = document.getElementById("exerciseBreak");
    var addExerciseBtn = document.getElementById("addExerciseBtn");
    var exerciseList = document.getElementById("exerciseList");
  
    var exercises = {};
  
    editButtons.forEach(button => {
      button.onclick = function() {
        var day = this.getAttribute("data-day");
        modalDayTitle.textContent = day;
        exerciseList.innerHTML = '';
        if (exercises[day]) {
          exercises[day].forEach(exercise => {
            addExerciseToList(exercise);
          });
        }
        modal.style.display = "block";
      };
    });
  
    closeBtn.onclick = function() {
      modal.style.display = "none";
    };
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  
    addExerciseBtn.onclick = function() {
      var name = exerciseName.value.trim();
      var time = exerciseTime.value.trim();
      var sets = exerciseSets.value.trim();
      var breakTime = exerciseBreak.value.trim();
      
      if (name !== '' && time !== '' && sets !== '' && breakTime !== '') {
        var exercise = {
          name: name,
          time: time,
          sets: sets,
          breakTime: breakTime
        };
        
        var day = modalDayTitle.textContent;
        if (!exercises[day]) {
          exercises[day] = [];
        }
        exercises[day].push(exercise);
        addExerciseToList(exercise);
        
        exerciseName.value = '';
        exerciseTime.value = '';
        exerciseSets.value = '';
        exerciseBreak.value = '';
      }
    };
  
    function addExerciseToList(exercise) {
      var li = document.createElement("li");
      li.textContent = `${exercise.name} (${exercise.time}) - ${exercise.sets} sets - ${exercise.breakTime} break`;
      exerciseList.appendChild(li);
    }
  });

// Get modal element
var modal = document.getElementById("editModal");

// Get the button that opens the modal
var editButtons = document.querySelectorAll(".edit-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get elements inside the modal
var modalDayTitle = document.getElementById("modalDayTitle");
var exerciseName = document.getElementById("exerciseName");
var exerciseTime = document.getElementById("exerciseTime");
var exerciseSets = document.getElementById("exerciseSets");
var exerciseBreak = document.getElementById("exerciseBreak");
var addExerciseBtn = document.getElementById("addExerciseBtn");
var exerciseList = document.getElementById("exerciseList");

// Store exercises for each day
var exercises = {};

// When the user clicks an edit button, open the modal
editButtons.forEach(button => {
  button.onclick = function() {
    var day = this.getAttribute("data-day");
    modalDayTitle.textContent = day;
    exerciseList.innerHTML = '';
    if (exercises[day]) {
      exercises[day].forEach(exercise => {
        addExerciseToList(exercise);
      });
    }
    modal.style.display = "block";
  };
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Add exercise to the list
addExerciseBtn.onclick = function() {
  var name = exerciseName.value.trim();
  var time = exerciseTime.value.trim();
  var sets = exerciseSets.value.trim();
  var breakTime = exerciseBreak.value.trim();
  
  if (name !== '' && time !== '' && sets !== '' && breakTime !== '') {
    var exercise = {
      name: name,
      time: time,
      sets: sets,
      breakTime: breakTime
    };
    
    var day = modalDayTitle.textContent;
    if (!exercises[day]) {
      exercises[day] = [];
    }
    exercises[day].push(exercise);
    addExerciseToList(exercise);
    
    // Clear inputs
    exerciseName.value = '';
    exerciseTime.value = '';
    exerciseSets.value = '';
    exerciseBreak.value = '';
  }
};

function addExerciseToList(exercise) {
  var li = document.createElement("li");
  li.textContent = `${exercise.name} (${exercise.time}) - ${exercise.sets} sets - ${exercise.breakTime} break`;
  exerciseList.appendChild(li);
}


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
    var editProfilePopup = document.getElementById("edit-profile-popup");
    var editProfileBtn = document.querySelector(".edit-profile-button");
    var closeEditProfile = editProfilePopup.querySelector(".close");
  
    editProfileBtn.addEventListener("click", function() {
        editProfilePopup.style.display = "block";
    });
  
    closeEditProfile.addEventListener("click", function() {
        editProfilePopup.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
        if (event.target == editProfilePopup) {
            editProfilePopup.style.display = "none";
        }
    });
  });