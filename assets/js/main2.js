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
  const friendsLink = document.getElementById('friends-link');
  const messagesLink = document.getElementById('messages-link');
  const friendsModal = document.getElementById('friends-modal');
  const messagesModal = document.getElementById('messages-modal');
  const closeFriendsBtn = friendsModal.querySelector('.close');
  const closeMessagesBtn = messagesModal.querySelector('.close');

  const addFriendBtn = document.getElementById('add-friend-btn');
  const friendsListBtn = document.getElementById('friends-list-btn');
  const friendRequestsBtn = document.getElementById('friend-requests-btn');
  const friendsListContainer = document.getElementById('friends-list-container');
  const friendRequestsContainer = document.getElementById('friend-requests-container');
  const searchFriendsInput = document.getElementById('search-friends');

  const composeMessageBtn = document.getElementById('compose-message-btn');
  const sendMessageBtn = document.getElementById('send-message');
  const messageInput = document.getElementById('message-input');
  const messagesContainer = document.getElementById('messages-container');
  const searchMessagesInput = document.getElementById('search-messages');

  friendsLink.onclick = function() {
    friendsModal.style.display = "block";
    showFriendsList();
  }

  messagesLink.onclick = function() {
    messagesModal.style.display = "block";
  }

  closeFriendsBtn.onclick = function() {
    friendsModal.style.display = "none";
  }

  closeMessagesBtn.onclick = function() {
    messagesModal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == friendsModal) {
      friendsModal.style.display = "none";
    }
    if (event.target == messagesModal) {
      messagesModal.style.display = "none";
    }
  }

  addFriendBtn.onclick = function() {
    const friendName = prompt("Enter the name of the new friend:");
    if (friendName) {
      const friendElement = document.createElement('div');
      friendElement.textContent = friendName;
      friendsListContainer.appendChild(friendElement);
      friendsListContainer.scrollTop = friendsListContainer.scrollHeight;
    }
  }

  friendsListBtn.onclick = function() {
    showFriendsList();
  }

  friendRequestsBtn.onclick = function() {
    showFriendRequests();
  }

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

  searchFriendsInput.oninput = function() {
    const query = searchFriendsInput.value.toLowerCase();
    const friends = friendsListContainer.querySelectorAll('div');
    friends.forEach(friend => {
      if (friend.textContent.toLowerCase().includes(query)) {
        friend.style.display = '';
      } else {
        friend.style.display = 'none';
      }
    });
  }

  composeMessageBtn.onclick = function() {
    messageInput.focus();
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

  var cols = {},

    messageIsOpen = false;

  cols.showOverlay = function() {
    document.body.classList.add('show-main-overlay');
  };
  cols.hideOverlay = function() {
    document.body.classList.remove('show-main-overlay');
  };

  cols.showMessage = function() {
    document.body.classList.add('show-message');
    messageIsOpen = true;
  };
  cols.hideMessage = function() {
    document.body.classList.remove('show-message');
    document.querySelector('#main .message-list li').classList.remove('active');
    messageIsOpen = false;
  };

  cols.showSidebar = function() {
    document.body.classList.add('show-sidebar');
  };
  cols.hideSidebar = function() {
    document.body.classList.remove('show-sidebar');
  };

  document.querySelector('.trigger-toggle-sidebar').addEventListener('click', function() {
    cols.showSidebar();
    cols.showOverlay();
  });

  document.querySelector('.trigger-message-close').addEventListener('click', function() {
    cols.hideMessage();
    cols.hideOverlay();
  });

  document.querySelector('#main .message-list').addEventListener('click', function(e) {
    var item = e.target.closest('li'),
      target = e.target;

    if (target.tagName === 'LABEL') {
      item.classList.toggle('selected');
    } else {
      if (messageIsOpen && item.classList.contains('active')) {
        cols.hideMessage();
        cols.hideOverlay();
      } else {
        if (messageIsOpen) {
          cols.hideMessage();
          item.classList.add('active');
          setTimeout(function() {
            cols.showMessage();
          }, 300);
        } else {
          item.classList.add('active');
          cols.showMessage();
        }
        cols.showOverlay();
      }
    }
  });

  document.querySelector('input[type=checkbox]').addEventListener('click', function(e) {
    e.stopImmediatePropagation();
  });

  document.querySelector('#main > .overlay').addEventListener('click', function() {
    cols.hideOverlay();
    cols.hideMessage();
    cols.hideSidebar();
  });

  var nanoScrollElements = document.querySelectorAll('.nano');
  nanoScrollElements.forEach(function(element) {
    $(element).nanoScroller();
  });

  document.querySelectorAll('a').forEach(function(element) {
    element.addEventListener('click', function(e) {
      e.preventDefault();
    });
  });

  document.querySelector('.search-box input').addEventListener('focus', function() {
    if (window.innerWidth <= 1360) {
      cols.hideMessage();
    }
  });
});


document.addEventListener('DOMContentLoaded', (event) => {
  const composeMessageBtn = document.getElementById('compose-message-btn');
  const composeMessageModal = document.getElementById('compose-message-modal');
  const closeComposeMessageBtn = composeMessageModal.querySelector('.close');

  composeMessageBtn.onclick = function() {
    composeMessageModal.style.display = "block";
  }

  closeComposeMessageBtn.onclick = function() {
    composeMessageModal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == composeMessageModal) {
      composeMessageModal.style.display = "none";
    }
  }

  document.getElementById('mailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // Simulate sending email
    alert('Email sent successfully!');
    composeMessageModal.style.display = "none";
  });
});

  




  /**
   * Schedule generation
   */
  document.addEventListener('DOMContentLoaded', function() {
    const editModal = document.getElementById("editModal");
    const addExerciseBtn = document.getElementById('addExerciseBtn');
    const exerciseName = document.getElementById('exerciseName');
    const exerciseTime = document.getElementById('exerciseTime');
    const exerciseSets = document.getElementById('exerciseSets');
    const exerciseBreak = document.getElementById('exerciseBreak');
    const exerciseList = document.getElementById('exerciseList');
    const saveExercisesBtn = document.getElementById('saveExercisesBtn');
    const modalDayTitle = document.getElementById('modalDayTitle');
    const closeEditModal = document.querySelector("#editModal .close");
  
    let exercises = {};
    let currentEditIndex = null;
  
    closeEditModal.onclick = function() {
      editModal.style.display = "none";
    };
  
    window.onclick = function(event) {
      if (event.target == editModal) {
        editModal.style.display = "none";
      }
    };
  
    document.querySelectorAll('.btn-outline-secondary').forEach(button => {
      button.addEventListener('click', function() {
        const day = button.getAttribute('data-day');
        modalDayTitle.textContent = day;
        updateExerciseList();
        editModal.style.display = "block";
      });
    });
  
    addExerciseBtn.onclick = function() {
      const name = exerciseName.value.trim();
      const time = exerciseTime.value.trim();
      const sets = exerciseSets.value.trim();
      const breakTime = exerciseBreak.value.trim();
      
      if (name && time && sets && breakTime) {
        const exercise = {
          name: name,
          time: time,
          sets: sets,
          breakTime: breakTime
        };
        
        const day = modalDayTitle.textContent;
        if (!exercises[day]) {
          exercises[day] = [];
        }
  
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
        exercises[day].forEach((exercise, index) => {
          addExerciseToList(exercise, index);
        });
      }
    }
  
    function addExerciseToList(exercise, index) {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${exercise.name} - ${exercise.time}s / Rep - ${exercise.sets} Sets - ${exercise.breakTime}s Break</span>
        <div>
          <button class="btn btn-outline-secondary btn-sm">Edit</button>
          <button class="btn btn-outline-danger btn-sm">Delete</button>
        </div>
      `;
  
      const editButton = li.querySelector('.btn-outline-secondary');
      const deleteButton = li.querySelector('.btn-outline-danger');
  
      editButton.onclick = function() {
        currentEditIndex = index;
        const day = modalDayTitle.textContent;
        const exercise = exercises[day][index];
        exerciseName.value = exercise.name;
        exerciseTime.value = exercise.time;
        exerciseSets.value = exercise.sets;
        exerciseBreak.value = exercise.breakTime;
        addExerciseBtn.textContent = 'Update Exercise';
      };
  
      deleteButton.onclick = function() {
        const day = modalDayTitle.textContent;
        exercises[day].splice(index, 1);
        updateExerciseList();
      };
  
      exerciseList.appendChild(li);
    }
  
    saveExercisesBtn.onclick = function() {
      alert('Exercises saved successfully!');
      editModal.style.display = 'none';
    };
  
    function clearInputs() {
      exerciseName.value = '';
      exerciseTime.value = '';
      exerciseSets.value = '';
      exerciseBreak.value = '';
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