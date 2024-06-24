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
   * Profile Edit Pop-Up
   */
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

  /**
   * Friends, Messages, and Schedule Modals
   */
  document.addEventListener('DOMContentLoaded', (event) => {
    // Open and close modals
    function setupModal(modalId, triggerId, closeClass) {
      const modal = document.getElementById(modalId);
      const trigger = document.getElementById(triggerId);
      const closeBtn = modal.querySelector(closeClass);

      trigger.onclick = () => modal.style.display = "block";
      closeBtn.onclick = () => modal.style.display = "none";
      window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none";
      };
    }

    setupModal('friends-modal', 'friends-link', '.close');
    setupModal('messages-modal', 'messages-link', '.close');
    setupModal('compose-message-modal', 'compose-message-btn', '.close');
    setupModal('schedule-modal', 'start-link', '.close');
    
    // Friends modal functionality
    const addFriendBtn = document.getElementById('add-friend-btn');
    const friendsListContainer = document.getElementById('friends-list-container');
    const searchFriendsInput = document.getElementById('search-friends');
    const friendsListBtn = document.getElementById('friends-list-btn');
    const friendRequestsBtn = document.getElementById('friend-requests-btn');
    const friendRequestsContainer = document.getElementById('friend-requests-container');

    addFriendBtn.onclick = () => {
      const friendName = prompt("Enter the name of the new friend:");
      if (friendName) {
        const friendElement = document.createElement('div');
        friendElement.textContent = friendName;
        friendsListContainer.appendChild(friendElement);
        friendsListContainer.scrollTop = friendsListContainer.scrollHeight;
      }
    };

    friendsListBtn.onclick = () => showFriendsList();
    friendRequestsBtn.onclick = () => showFriendRequests();

    function showFriendsList() {
      friendsListContainer.style.display = 'block';
      friendRequestsContainer.style.display = 'none';
      friendsListBtn.classList.add('active');
      friendRequestsBtn.classList.remove('active');
    }

    function showFriendRequests() {
      friendsListContainer.style.display = 'none';
      friendRequestsContainer.style.display = 'block';
      friendsListBtn.classList.remove('active');
      friendRequestsBtn.classList.add('active');
    }

    searchFriendsInput.oninput = () => {
      const query = searchFriendsInput.value.toLowerCase();
      const friends = friendsListContainer.querySelectorAll('div');
      friends.forEach(friend => {
        if (friend.textContent.toLowerCase().includes(query)) {
          friend.style.display = '';
        } else {
          friend.style.display = 'none';
        }
      });
    };

    // Messages modal functionality
    const searchMessagesInput = document.getElementById('search-messages');
    const messagesContainer = document.getElementById('messages-container');

    searchMessagesInput.oninput = () => {
      const query = searchMessagesInput.value.toLowerCase();
      const messages = messagesContainer.querySelectorAll('div');
      messages.forEach(message => {
        if (message.textContent.toLowerCase().includes(query)) {
          message.style.display = '';
        } else {
          message.style.display = 'none';
        }
      });
    };

    // Schedule modal functionality
    const editModal = document.getElementById("editModal");
    const toggleInputContainerBtn = document.getElementById('toggleInputContainerBtn');
    const addExerciseBtn = document.getElementById('addExerciseBtn');
    const exerciseInputContainer = document.getElementById('exerciseInputContainer');
    const exerciseName = document.getElementById('exerciseName');
    const exerciseReps = document.getElementById('exerciseReps');
    const exerciseTimePerRep = document.getElementById('exerciseTimePerRep');
    const exerciseSets = document.getElementById('exerciseSets');
    const exerciseBreak = document.getElementById('exerciseBreak');
    const exerciseList = document.getElementById('exerciseList');
    const saveExercisesBtn = document.getElementById('saveExercisesBtn');
    const modalDayTitle = document.getElementById('modalDayTitle');
    const closeEditModal = document.querySelector("#editModal .close");

    let exercises = {};
    let currentEditIndex = null;

    closeEditModal.onclick = () => editModal.style.display = "none";
    window.onclick = (event) => {
      if (event.target == editModal) editModal.style.display = "none";
    };

    document.querySelectorAll('.btn-outline-secondary').forEach(button => {
      button.addEventListener('click', function() {
        const day = button.getAttribute('data-day');
        modalDayTitle.textContent = day;
        updateExerciseList();
        editModal.style.display = "block";
      });
    });

    addExerciseBtn.onclick = () => {
      const name = exerciseName.value.trim();
      const reps = exerciseReps.value.trim();
      const timePerRep = exerciseTimePerRep.value.trim();
      const sets = exerciseSets.value.trim();
      const breakTime = exerciseBreak.value.trim();
      
      if (name && reps && timePerRep && sets && breakTime) {
        const exercise = { name, reps, timePerRep, sets, breakTime };
        const day = modalDayTitle.textContent;
        if (!exercises[day]) exercises[day] = [];
        if (currentEditIndex !== null) {
          exercises[day][currentEditIndex] = exercise;
          currentEditIndex = null;
          addExerciseBtn.textContent = 'Add Exercise';
        } else {
          exercises[day].push(exercise);
        }
        updateExerciseList();
        clearInputs();
      }
    };

    function updateExerciseList() {
      exerciseList.innerHTML = '';
      const day = modalDayTitle.textContent;
      if (exercises[day]) {
        exercises[day].forEach((exercise, index) => addExerciseToList(exercise, index));
      }
    }

    function addExerciseToList(exercise, index) {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${exercise.name} - ${exercise.reps} Reps - ${exercise.timePerRep} sec/Rep - ${exercise.sets} Sets - ${exercise.breakTime}s Break</span> 
        <div>
          <button class="btn btn-outline-secondary btn-sm">Edit</button>
          <button class="btn btn-outline-danger btn-sm">Delete</button>
        </div>
      `;
      const editButton = li.querySelector('.btn-outline-secondary');
      const deleteButton = li.querySelector('.btn-outline-danger');
      editButton.onclick = () => {
        currentEditIndex = index;
        const day = modalDayTitle.textContent;
        const exercise = exercises[day][index];
        exerciseName.value = exercise.name;
        exerciseReps.value = exercise.reps;
        exerciseTimePerRep.value = exercise.timePerRep;
        exerciseSets.value = exercise.sets;
        exerciseBreak.value = exercise.breakTime;
        addExerciseBtn.textContent = 'Update Exercise';
      };
      deleteButton.onclick = () => {
        const day = modalDayTitle.textContent;
        exercises[day].splice(index, 1);
        updateExerciseList();
      };
      exerciseList.appendChild(li);
    }

    saveExercisesBtn.onclick = () => {
      alert('Exercises saved successfully!');
      editModal.style.display = 'none';
    };

    function clearInputs() {
      exerciseName.value = '';
      exerciseReps.value = '';
      exerciseTimePerRep.value = '';
      exerciseSets.value = '';
      exerciseBreak.value = '';
    }

    toggleInputContainerBtn.onclick = () => {
      if (exerciseInputContainer.style.display === "none") {
        exerciseInputContainer.style.display = "flex";
      } else {
        exerciseInputContainer.style.display = "none";
      }
    };
  });

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
