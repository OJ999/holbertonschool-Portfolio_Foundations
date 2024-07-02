(function() {
  "use strict";

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

  const scrollto = (el) => {
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    });
  };

  let backtotop = select('.back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      backtotop.classList.toggle('active', window.scrollY > 100);
    };
    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

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

  window.addEventListener('load', () => {
    if (window.location.hash && select(window.location.hash)) {
      scrollto(window.location.hash);
    }
  });

  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

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

  document.addEventListener("DOMContentLoaded", function() {
    var editProfilePopup = document.getElementById("edit-profile-popup");
    var editProfileBtn = document.querySelector(".edit-profile-button");
    var closeEditProfile = editProfilePopup.querySelector(".close");

    const setEditProfilePlaceholders = () => {
      document.getElementById("name").placeholder = document.querySelector(".profile-details h2").textContent.trim();
      document.getElementById("bio").placeholder = document.querySelector(".profile-details p.fst-italic").textContent.trim();
      document.getElementById("birthday").placeholder = document.querySelector(".profile-details ul li:nth-child(1) strong").nextSibling.textContent.trim();
      document.getElementById("email").placeholder = document.querySelector(".profile-details ul li:nth-child(2) strong").nextSibling.textContent.trim();
      document.getElementById("phone").placeholder = document.querySelector(".profile-details ul li:nth-child(3) strong").nextSibling.textContent.trim();
      document.getElementById("city").placeholder = document.querySelector(".profile-details ul li:nth-child(4) strong").nextSibling.textContent.trim();
    };

    editProfileBtn.addEventListener("click", function() {
      setEditProfilePlaceholders();
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

    var editProfileForm = document.getElementById("edit-profile-form");
    editProfileForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var name = document.getElementById("name").value;
      var bio = document.getElementById("bio").value;
      var birthday = document.getElementById("birthday").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      var city = document.getElementById("city").value;
      var profilePicture = document.getElementById("profile_picture").files[0];

      const nameElement = document.querySelector(".profile-details h2");
      const bioElement = document.querySelector(".profile-details p.fst-italic");
      const birthdayElement = document.querySelector(".profile-details ul li:nth-child(1) strong").nextSibling;
      const emailElement = document.querySelector(".profile-details ul li:nth-child(2) strong").nextSibling;
      const phoneElement = document.querySelector(".profile-details ul li:nth-child(3) strong").nextSibling;
      const cityElement = document.querySelector(".profile-details ul li:nth-child(4) strong").nextSibling;

      if (name && nameElement.textContent.trim() !== name) {
        nameElement.textContent = name;
      }
      if (bio && bioElement.textContent.trim() !== bio) {
        bioElement.textContent = bio;
      }
      if (birthday && birthdayElement.textContent.trim() !== birthday) {
        birthdayElement.textContent = ` ${birthday}`;
      }
      if (email && emailElement.textContent.trim() !== email) {
        emailElement.textContent = ` ${email}`;
      }
      if (phone && phoneElement.textContent.trim() !== phone) {
        phoneElement.textContent = ` ${phone}`;
      }
      if (city && cityElement.textContent.trim() !== city) {
        cityElement.textContent = ` ${city}`;
      }

      if (profilePicture) {
        var reader = new FileReader();
        reader.onload = function(e) {
          document.querySelector(".profile-picture img").src = e.target.result;
        };
        reader.readAsDataURL(profilePicture);
      }

      editProfilePopup.style.display = "none";
    });
  });

  document.addEventListener('DOMContentLoaded', (event) => {
    function setupModal(modalId, triggerId, closeClass) {
      const modal = document.getElementById(modalId);
      const trigger = document.getElementById(triggerId);
      const closeBtn = modal.querySelector(closeClass);

      if (trigger) {
        trigger.onclick = () => modal.style.display = "block";
      }
      closeBtn.onclick = () => modal.style.display = "none";
      window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none";
      };
    }

    setupModal('friends-modal', 'friends-link', '.close');
    setupModal('profile-modal', 'profile-link', '.close');
    setupModal('schedule-modal', 'start-link', '.close');
    setupModal('conversation-modal', null, '.close');
    setupModal('add-friend-modal', 'add-friend-btn', '.close');
    setupModal('clients-modal', 'clients-link', '.close');
    setupModal('client-schedule-modal', null, '.close');

    var addFriendModal = document.getElementById('add-friend-modal');
    var searchFriendsBtn = document.getElementById('search-friends-btn');
    var closeAddFriendModal = addFriendModal.querySelector('.close');

    searchFriendsBtn.addEventListener('click', function() {
      const query = document.getElementById('search-friends').value.toLowerCase();
      const friends = document.querySelectorAll('#friends-list-container .friend-item');
      friends.forEach(friend => {
        if (friend.textContent.toLowerCase().includes(query)) {
          friend.style.display = '';
        } else {
          friend.style.display = 'none';
        }
      });
    });

    closeAddFriendModal.addEventListener('click', function() {
      addFriendModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
      if (event.target == addFriendModal) {
        addFriendModal.style.display = 'none';
      }
    });

    const addFriendBtn = document.getElementById('add-friend-btn');
    const friendsListContainer = document.getElementById('friends-list-container');
    const searchFriendsInput = document.getElementById('search-friends');
    const friendsListBtn = document.getElementById('friends-list-btn');
    const friendRequestsBtn = document.getElementById('friend-requests-btn');
    const friendRequestsContainer = document.getElementById('friend-requests-container');

    addFriendBtn.onclick = () => {
      addFriendModal.style.display = 'block';
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
      const friends = friendsListContainer.querySelectorAll('.friend-item');
      friends.forEach(friend => {
        if (friend.textContent.toLowerCase().includes(query)) {
          friend.style.display = '';
        } else {
          friend.style.display = 'none';
        }
      });
    };

    const conversationModal = document.getElementById('conversation-modal');
    const closeConversationModal = conversationModal.querySelector('.close');
    const sendMessageBtn = document.getElementById('send-message-btn');
    const messageInput = document.getElementById('message-input');
    const conversationMessages = document.getElementById('conversation-messages');
    const friendNameElem = document.getElementById('conversation-friend-name');
    let currentFriendName = '';

    document.querySelectorAll('.message-btn').forEach(btn => {
      setupMessageButton(btn);
    });

    function setupMessageButton(btn) {
      btn.addEventListener('click', (e) => {
        const friendName = e.target.closest('.friend-item').querySelector('.friend-name').innerText;
        currentFriendName = friendName;
        friendNameElem.innerText = friendName;
        openConversationModal(friendName);
      });
    }

    closeConversationModal.onclick = () => {
      conversationModal.style.display = 'none';
    };

    window.onclick = (event) => {
      if (event.target == conversationModal) {
        conversationModal.style.display = 'none';
      }
    };

    sendMessageBtn.addEventListener('click', () => {
      sendMessage();
    });

    messageInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });

    function openConversationModal(friendName) {
      conversationModal.style.display = 'block';
      loadConversation(friendName);
    }

    function addMessage(text, type) {
      const messageElem = document.createElement('div');
      messageElem.classList.add('message', type);
      messageElem.innerText = text;
      conversationMessages.appendChild(messageElem);
      conversationMessages.scrollTop = conversationMessages.scrollHeight;
    }

    function sendMessage() {
      const messageText = messageInput.value.trim();
      if (messageText !== '') {
        addMessage(messageText, 'sent');
        messageInput.value = '';
      }
    }

    const editModal = document.getElementById("editModal");
    const toggleInputContainerBtn = document.getElementById('toggleInputContainerBtn');
    const addExerciseBtn = document.getElementById('addExerciseBtn');
    const exerciseInputContainer = document.getElementById('exerciseInputContainer');
    const exerciseName = document.getElementById('exerciseName');
    const exerciseReps = document.getElementById('exerciseReps');
    const exerciseTimePerRep = document.getElementById('exerciseTimePerRep');
    const exerciseSets = document.getElementById('exerciseSets');
    const exerciseBreak = document.getElementById('exerciseBreak');
    const breakAfterExercise = document.getElementById('breakAfterExercise');
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
      const breakAfter = breakAfterExercise.value.trim();

      if (name && reps && timePerRep && sets && breakTime && breakAfter) {
        const exercise = { name, reps, timePerRep, sets, breakTime, breakAfter };
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
        <span>${exercise.name} - ${exercise.reps} Reps - ${exercise.timePerRep} sec/Rep - ${exercise.sets} Sets - ${exercise.breakTime}s Break - ${exercise.breakAfter}s Break After</span> 
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
        breakAfterExercise.value = exercise.breakAfter;
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
      breakAfterExercise.value = '';
    }

    toggleInputContainerBtn.onclick = () => {
      if (exerciseInputContainer.style.display === "none") {
        exerciseInputContainer.style.display = "flex";
      } else {
        exerciseInputContainer.style.display = "none";
      }
    };

    function createFriendRequestElement(name, profilePic) {
      const friendRequestElement = document.createElement('div');
      friendRequestElement.classList.add('friend-request-item');
      friendRequestElement.innerHTML = `
        <img src="${profilePic}" alt="Profile Picture" class="profile-pic">
        <span class="friend-name">${name}</span>
        <button class="accept-btn">Accept</button>
        <button class="decline-btn">Decline</button>
      `;
      friendRequestsContainer.appendChild(friendRequestElement);

      friendRequestElement.querySelector('.accept-btn').onclick = () => {
        moveFriendToAcceptedList(friendRequestElement);
      };

      friendRequestElement.querySelector('.decline-btn').onclick = () => {
        friendRequestElement.remove();
      };
    }

    function moveFriendToAcceptedList(friendElement) {
      const friendName = friendElement.querySelector('.friend-name').textContent;
      const friendProfilePic = friendElement.querySelector('.profile-pic').src;

      const newFriendElement = document.createElement('div');
      newFriendElement.classList.add('friend-item');
      newFriendElement.innerHTML = `
        <img src="${friendProfilePic}" alt="Profile Picture" class="profile-pic">
        <span class="friend-name">${friendName}</span>
        <button class="message-btn">Message</button>
      `;

      friendsListContainer.appendChild(newFriendElement);
      setupMessageButton(newFriendElement.querySelector('.message-btn'));
      friendElement.remove();
    }

    const addClientBtn = document.getElementById('add-client-btn');
    const clientsListContainer = document.getElementById('clients-list-container');

    function addClientToList(name, profilePic) {
      const clientItem = document.createElement('div');
      clientItem.classList.add('client-item');
      clientItem.innerHTML = `
        <img src="${profilePic}" alt="Profile Picture" class="profile-pic">
        <span class="client-name">${name}</span>
        <button class="remove-client-btn btn btn-outline-danger btn-sm">Remove</button>
        <button class="schedule-client-btn btn btn-outline-secondary btn-sm">Schedule</button>
      `;
      clientsListContainer.appendChild(clientItem);

      clientItem.querySelector('.remove-client-btn').onclick = () => {
        clientItem.remove();
      };

      clientItem.querySelector('.schedule-client-btn').onclick = () => {
        openClientScheduleModal(name);
      };
    }

    const searchClientsBtn = document.getElementById('search-clients-btn');
    searchClientsBtn.addEventListener('click', function() {
      const query = document.getElementById('search-clients').value.toLowerCase();
      const clients = document.querySelectorAll('#clients-list-container .client-item');
      clients.forEach(client => {
        if (client.textContent.toLowerCase().includes(query)) {
          client.style.display = '';
        } else {
          client.style.display = 'none';
        }
      });
    });

    // Simulate a friend request from user1.html named "Client"
    createFriendRequestElement("Client", "path_to_profile_picture.jpg");

    // Client Schedule Modal Logic
    let clientSchedules = {};
    const clientScheduleModal = document.getElementById('client-schedule-modal');
    const clientScheduleList = document.getElementById('client-schedule-list');
    const clientScheduleName = document.getElementById('client-schedule-name');
    const clientAddScheduleBtn = document.getElementById('client-add-schedule-btn');
    const clientSaveScheduleBtn = document.getElementById('client-save-schedule-btn');
    const closeClientScheduleModal = clientScheduleModal.querySelector('.close');
    let currentClientName = '';

    function openClientScheduleModal(clientName) {
      currentClientName = clientName;
      clientScheduleModal.style.display = 'block';
      loadClientSchedule(clientName);
    }

    closeClientScheduleModal.onclick = () => {
      clientScheduleModal.style.display = 'none';
    };

    window.onclick = (event) => {
      if (event.target == clientScheduleModal) {
        clientScheduleModal.style.display = 'none';
      }
    };

    clientAddScheduleBtn.onclick = () => {
      const scheduleItem = clientScheduleName.value.trim();
      if (scheduleItem !== '') {
        addClientScheduleItem(scheduleItem);
        clientScheduleName.value = '';
      }
    };

    clientSaveScheduleBtn.onclick = () => {
      saveClientSchedule();
    };

    function loadClientSchedule(clientName) {
      clientScheduleList.innerHTML = '';
      if (clientSchedules[clientName]) {
        clientSchedules[clientName].forEach((item, index) => addClientScheduleItemToList(item, index));
      }
    }

    function addClientScheduleItem(scheduleItem) {
      const clientName = currentClientName;
      if (!clientSchedules[clientName]) {
        clientSchedules[clientName] = [];
      }
      clientSchedules[clientName].push(scheduleItem);
      addClientScheduleItemToList(scheduleItem, clientSchedules[clientName].length - 1);
    }

    function addClientScheduleItemToList(scheduleItem, index) {
      const li = document.createElement('li');
      li.innerText = scheduleItem;
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('btn', 'btn-outline-danger', 'btn-sm');
      deleteBtn.innerText = 'Delete';
      deleteBtn.onclick = () => {
        clientSchedules[currentClientName].splice(index, 1);
        loadClientSchedule(currentClientName);
      };
      li.appendChild(deleteBtn);
      clientScheduleList.appendChild(li);
    }

    function saveClientSchedule() {
      alert(`Schedule for ${currentClientName} saved successfully!`);
      clientScheduleModal.style.display = 'none';
    }
  });

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

  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

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

  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  });

  new PureCounter();
})();
