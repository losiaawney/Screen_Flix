const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const checkboxbtn = document.querySelector('.remember-forget');

const btnLogin = document.querySelector('.loginbtn');
const closeLogin = document.querySelector('.icon-close');
const mainSlider = document.getElementById('main-slider'); 
const latest_movie = document.getElementById('latest'); 
const pagenumber  = document.getElementById('page-number'); 
  const slider_btn  = document.getElementById('slider-btns'); 
  const logoutBtn = document.getElementById('logoutBtn');
  const deletenavi = document.getElementById('navigation-header');


//   let users = [];

//   // Switch to the registration form
//   registerLink.addEventListener('click', () => {
//       wrapper.classList.add('active');
//   });

//   // Switch to the login form
//   loginLink.addEventListener('click', () => {
//       wrapper.classList.remove('active');
//   });

//   // Show the login/registration form and hide the slider
//   btnLogin.addEventListener('click', () => {
//       wrapper.classList.add('active-popup');
//       mainSlider.style.display = 'none';
//       latest_movie.style.display = 'none';
//       pagenumber.style.display = 'none';
//       slider_btn.style.display = 'none';

//   });

//   // Close the login/registration form and show the slider
//   closeLogin.addEventListener('click', () => {
//       wrapper.classList.remove('active-popup');
//       mainSlider.style.display = 'block';
//       latest_movie.style.display = 'block';
//       pagenumber.style.display = 'block';
//       slider_btn.style.display = 'block';
//   });

//   // Register Form
//   document.getElementById('registerForm').addEventListener('submit', function(event) {
//       event.preventDefault(); 
//       let username = event.target.username.value;
//       let email = event.target.email.value;
//       let password = event.target.password.value;

//       let newUser = {
//           username: username,
//           email: email,
//           password: password
//       };

//       users.push(newUser);

//     //   alert('User registered successfully!');
//       console.log(users);
//       event.target.reset();

//       loginLink.click();
//   });
//   document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault(); 

//     let email = event.target.email.value;
//     let password = event.target.password.value;

//     // Assuming you have admin logic here
//     if (email === 'admin@gmail.com' && password === '1') {
//         // alert('Admin login successful! Redirecting to Admin Page...');
//         window.location.href = 'index.html'; // Redirect to the admin's home page
//         return; 
//     }

//     let userFound = users.find(user => user.email === email && user.password === password);

//     if (userFound) {
//         // alert('Login successful! Welcome, ' + userFound.username);
        
//         // Set the user as logged in in localStorage
//         localStorage.setItem('isLoggedIn', 'true');
//         // Redirect to home page
//         window.location.href = 'main.html';
//     } else {
//         alert('Invalid email or password. Please try again.');
//     }

//     event.target.reset();
// });

  // Rate button************
  function openRatePopup(){
   
    
    console.log("Open Rate Popup function called");
      let ratePopup = document.getElementById("rate-popup");
      ratePopup.classList.add("open-rate-popup")
       
  }
  function closeRatePopup(){
      let ratePopup = document.getElementById("rate-popup");
      ratePopup.classList.remove("open-rate-popup");
  }
// Function to clear the text area when the class is added
function clearTextAreaOnOpen() {
  // Select the text area
  var textArea = document.getElementById("txtar");
  
  // Clear the text area value
  textArea.value = '';
}


 // Add review to the slider
function addReviewToSlider() {
  // Retrieve the username from localStorage
  let username = localStorage.getItem('username') || 'Anonymous'; // Default to 'Anonymous' if no username is found

  // Log the username for debugging
  console.log(username);

  // Get the reviews wrapper element
  var reviewsWrapper = document.getElementById('swiper-wrapper');

  // Get the selected star rating
  var selectedRating = document.querySelector('input[name="rate"]:checked');
  var ratingValue = selectedRating ? selectedRating.id.replace('rate-', '') : 0;

  // Get the review text
  var reviewText = document.querySelector('.text-area textarea').value;

  // Create a new review item (swiper-slide)
  var newReviewItem = document.createElement('div');
  newReviewItem.classList.add('swiper-slide', 'reviews-item');

  // Generate the stars based on the rating
  var starsHtml = '';
  for (var i = 0; i < ratingValue; i++) {
      starsHtml += '<i class="fa fa-star"></i>';
  }

  // Add content to the new review item
  newReviewItem.innerHTML = `
      <div class="info">
          <div class="rev-text">
              <h3 class="rev-name">${username}</h3> <!-- Use the username here -->
          </div>
      </div>
      <p>${reviewText}</p>
      <div class="rev-rating">
          ${starsHtml}
      </div>
      <button class="delete-btn">Delete</button>
  `;

  // Append the new review item to the reviews wrapper
  reviewsWrapper.appendChild(newReviewItem);

  // Update Swiper to recognize the new slide
  const swiper = document.querySelector('.js-reviews-slider').swiper;
  swiper.update();

  // Add event listener for delete button to remove the review item
  newReviewItem.querySelector('.delete-btn').addEventListener('click', function() {
      newReviewItem.remove(); // Remove the review item when the delete button is clicked
      swiper.update(); // Update Swiper after removal
  });
}


  



function openTrailor(){
  document.getElementById('play').style.display = 'block';
}
function closeTrailor() {
  document.getElementById('play').style.display = 'none';
}


// Example data for movies
// Array for slider movie data
const sliderMovies = [
  { key: "Insidious", quality: "Full HD" },
  { key: "pirates", quality: "Full HD" },
  { key: "deadpool", quality: "Full HD" },
  { key: "venom", quality: "Full HD" },
  { key: "war", quality: "Full HD" },
  { key: "rumble", quality: "Full HD" },
  { key: "wanda", quality: "Full HD" },
  { key: "luca", quality: "Full HD" },
  
];


// Function to generate the slider content dynamically
function generateSliderContent() {
  const sliderContent = document.getElementById('slider-content');
  const latestMovieContainer = document.querySelector('.post-container');

  if (!sliderContent || !latestMovieContainer) {
    console.error("Element not found: sliderContent or latestMovieContainer");
    return;
  }

  // Clear existing content
  sliderContent.innerHTML = '';
  latestMovieContainer.innerHTML = '';

  sliderMovies.forEach(sliderMovie => {
    const movie = moviesArray[sliderMovie.key];

    // Create a new slide element for the slider
    const slideElement = document.createElement('div');
    slideElement.classList.add('swiper-slide');
    slideElement.innerHTML = `
      <div class="main-slider-box">
        <a href="movie-page.html" onclick="selectMovie('${sliderMovie.key}')" class="main-slider-overlay">
          <i class="fas fa-play"></i>
        </a>
        <div class="main-slider-image">
          <img src="${movie.main_image}" alt="${movie.title}" />
        </div>
        <div class="main-slider-text">
          <span class="quality">${sliderMovie.quality}</span>
          <div class="bottom-text">
            <div class="movie-name">
              <span>${movie.releaseDate.split(' ')[2]}</span>
              <strong>${movie.title}</strong>
            </div>
          </div>
        </div>
      </div>
    `;
    sliderContent.appendChild(slideElement);

    // Create a new post-box element for the latest movies
    const postBox = document.createElement('div');
    postBox.classList.add('post-box');
    postBox.innerHTML = `
      <div class="post-img">
        <div class="swiper-slide">
          <div class="main-slider-box">
            <a href="#" onclick="selectMovie('${sliderMovie.key}')" class="main-slider-overlay">
              <i class="fas fa-play"></i>
            </a>
            <div class="main-slider-image">
              <img src="${movie.main_image}" alt="${movie.title}" />
            </div>
            <div class="main-slider-text">
              <span class="quality">${sliderMovie.quality}</span>
              <div class="bottom-text">
                <div class="movie-name">
                  <span>${movie.releaseDate.split(' ')[2]}</span>
                  <strong>${movie.title}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    latestMovieContainer.appendChild(postBox);
  });

  // Initialize Swiper or any other slider library here if needed
}



// Function to handle movie selection and navigation
function selectMovie(movieKey) {
  // Store the selected movie's key in localStorage
  localStorage.setItem('selectedMovie', movieKey);

  // Redirect to the movie page
  window.location.href = "movie-page.html";
}

// Call the function to generate the slider content on page load
document.addEventListener('DOMContentLoaded', function() {
  generateSliderContent();
});



//function selectMovie(movieKey) {
  //localStorage.setItem('selectedMovie', movieKey);
//}
document.addEventListener('DOMContentLoaded', function() {
    const movieKey = localStorage.getItem('selectedMovie');
    if (movieKey) {
        updateMovieDetails(movieKey);
    }
});

const moviesArray = {
  "pirates": {
      title: "Pirates of the Caribbean: Salazar's Revenge",
      main_image:"Images/p-2.jpeg",
      image: "Movie-Data/Pirates-of-the-Caribbean-Salazar's-Revenge/cover.jpg",
      releaseDate: "28 August 2017",
      trailer: "Movie-Data/Pirates-of-the-Caribbean-Salazar's-Revenge/movie.mp4", 
      category: "Action, Adventure, Fantasy",
      description: "Captain Jack Sparrow searches for the Trident of Poseidon to rule the sea while being pursued by old rival Captain Salazar and a crew of deadly ghosts who have escaped from the Devil's Triangle."
  },
  "Insidious": {
      title: "Insidious: The Last Key",
      main_image:"Images/p-1.jpg",
      image: "Movie-Data/insidous-last-key/insidious.png",
      releaseDate: "5 jaunary 2018",
      trailer: "Movie-Data/insidous-last-key/Insidious_ The Last Key - Official International Trailer (1).mp4", 
      category: "Horror, Mystery, Thriller",
      description:"Parapsychologist Dr. Elise Rainier faces her most fearsome and personal haunting yet, as she is drawn back to her ghostly childhood home where the terror began."
  },
  "deadpool": {
      title: "Deadpool 2",
      main_image:"Images/p-5.jpg",
      image: "Movie-Data/Deadpool/Deadpool.png",
      releaseDate: "15 may 2018",
      trailer: "Movie-Data/Deadpool/Deadpool 2 - Türkçe Dublajlı Final Fragman - 18 Mayıs 2018.mp4",  
      category: "Action, Adventure, Comedy",
      description:"Foul-mouthed mutant mercenary Wade Wilson (a.k.a. Deadpool) assembles a team of fellow mutant rogues to protect a young boy with abilities from the brutal, time-traveling cyborg Cable."
  },
  "venom": {
      title: "Venom: Let There Be Carnage",
      main_image:"Images/post-1.jpg",
      image: "Movie-Data/venom/venom.png",
      releaseDate: "2 August 2021",
      trailer: "Movie-Data/venom/VENOM_ LET THERE BE CARNAGE - Official Trailer (HD).mp4",
      category: "Action, Sci-Fi, Thriller",
      description:"Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution."
  },
  "war": {
      title: "The Tomorrow War",
      main_image:"Images/post-2.jpg",
      image: "Movie-Data/the tomorrow war/The_tomorrow_war.png",
      releaseDate: "2 July 2021",
      trailer: "Movie-Data/venom/VENOM_ LET THERE BE CARNAGE - Official Trailer (HD).mp4",
      category: " Adventure, Drama, Sci-Fi",
      description:"A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past."
  },
  "jungle": {
      title: "Jungle Cruise",
      main_image:"Images/post-3.jpg",
      image: "Movie-Data/jungle/jungle.png",
      releaseDate: "30 July 2021",
      trailer: "Movie-Data/venom/VENOM_ LET THERE BE CARNAGE - Official Trailer (HD).mp4",
      category: "Adventure, Comedy, Fantasy",
      description:"Based on Disneyland's theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals and reptiles but with a supernatural element."
   
  },
  "rumble": {
      title: "Rumble",
      main_image:"Images/post-8.jpg",
      image: "Movie-Data/rumble/rumba.png",
      releaseDate: "30 October 2013",
      trailer: "Movie-Data/venom/VENOM_ LET THERE BE CARNAGE - Official Trailer (HD).mp4",
      category: "Animation, Comedy, Family",
    
  },
  "wanda": {
      title: "WandaVision",
      main_image:"Images/post-9.jpg",
      image: "Movie-Data/wanda/wanda.png",
      releaseDate: "15 January 2021",
      trailer: "Movie-Data/venom/VENOM_ LET THERE BE CARNAGE - Official Trailer (HD).mp4",
      category: "Mystery, Romance, Sci-Fi",
      description:"Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems."
  },
  "luca": {
      title: "Luca",
      main_image:"Images/post-11.jpg",
      image: "Movie-Data/luca/luca.png",
      releaseDate: "18 June 2021 ",
      trailer: "Movie-Data/venom/VENOM_ LET THERE BE CARNAGE - Official Trailer (HD).mp4",
      category: "Comedy, Drama, Family",
      description:"On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human."
  },
  
};

// Function to update movie details dynamically
function updateMovieDetails(movieKey) {
  const movie = moviesArray[movieKey];
  if (movie) {
      document.getElementById('movie-title').textContent = movie.title;
      document.getElementById('movie-image').src = movie.image;
      document.getElementById('movie-release-date').textContent = movie.releaseDate;
      document.getElementById('movie-category').textContent = movie.category;
      document.getElementById('movie-trailer').src = movie.trailer;
      document.getElementById("movie-description").textContent=movie.description;

      // Ensure modal is opened after updating details
      openModal();
  } else {
      console.log('Movie not found:', movieKey);
  }
}


// Function to open the modal
function openModal() {
  document.getElementById('movieModal').style.display = 'block'; // Changed to flex
}

// Function to close the modal
function closeModal() {
  document.getElementById('movieModal').style.display = "none";
  document.getElementById('.close-movie').style.display = 'none';
  document.getElementById('movie-trailer').src = "";  // Stop the video
}

// // Function to open the rating popup
// function openRatePopup() {
//   document.getElementById('rate-popup').style.visibility = "visible"; // Change to visibility
// }

// // Function to close the rating popup
// function closeRatePopup() {
//   document.getElementById('rate-popup').style.visibility = "hidden"; // Change to visibility
// }

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
  var modal = document.getElementById('movieModal');
  if (event.target == modal) {
      modal.style.display = "none";
  }
}

// Ensure the modal is hidden when the page loads
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('movieModal').style.display = 'none';
});


//page--numberrr
 let currentPage = 1;
 const itemsPerPage = 4;
 const containers = document.querySelectorAll('.post-box');
 const totalPages = Math.ceil(containers.length / itemsPerPage);

/* function showPage(page) {
   containers.forEach((item, index) => {
     item.style.display = 'none'; // Hide all items initially
     if (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) {
       item.style.display = 'block'; // Show items for the current page
     }
   });
   updatePagination(page); // Update pagination active state
 }

 function setupPagination() {
   const pageNumberDiv = document.querySelector('.page-number');
   pageNumberDiv.innerHTML = ''; // Clear existing pagination

   for (let i = 1; i <= totalPages; i++) {
     const pageLink = document.createElement('a');
     pageLink.href = '#';
     pageLink.textContent = i;
     pageLink.dataset.page = i; // Store the page number in a data attribute

     pageLink.addEventListener('click', (e) => {
       e.preventDefault();
       currentPage = i;
       showPage(currentPage);
     });

     pageNumberDiv.appendChild(pageLink);
   }
 }*/

 function updatePagination(page) {
   const pageLinks = document.querySelectorAll('.page-number a');
   pageLinks.forEach(link => {
     if (parseInt(link.dataset.page) === page) {
       link.classList.add('active'); // Add active class to the current page link
     } else {
       link.classList.remove('active'); // Remove active class from other page links
     }
   });
 }

 document.addEventListener('DOMContentLoaded', () => {
   setupPagination();
   showPage(currentPage); // Show the initial page
 });

// Update pagination for the latest movies
function setupPagination() {
  const pageNumberDiv = document.querySelector('.page-number');
  pageNumberDiv.innerHTML = ''; // Clear existing pagination

  const totalPages = Math.ceil(document.querySelectorAll('.post-box').length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = i;
    pageLink.dataset.page = i; // Store the page number in a data attribute

    pageLink.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage = i;
      showPage(currentPage);
    });

    pageNumberDiv.appendChild(pageLink);
  }
}

// Function to show specific page
function showPage(page) {
  const containers = document.querySelectorAll('.post-box');
  containers.forEach((item, index) => {
    item.style.display = 'none'; // Hide all items initially
    if (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) {
      item.style.display = 'block'; // Show items for the current page
    }
  });
  updatePagination(page); // Update pagination active state
}
document.addEventListener('DOMContentLoaded', () => {
  generateSliderContent(); // Generate slider and latest movies
  setupPagination(); // Set up pagination
  showPage(currentPage); // Show the initial page

   // Check if a movie is selected and update details
   const movieKey = localStorage.getItem('selectedMovie');
   if (movieKey) {
       updateMovieDetails(movieKey);
   }
});
let users = [];

// Switch to the registration form
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Switch to the login form
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Show the login/registration form and hide the slider
btnLogin.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    mainSlider.style.display = 'none';
    latest_movie.style.display = 'none';
    pagenumber.style.display = 'none';
    slider_btn.style.display = 'none';
});

// Close the login/registration form and show the slider
closeLogin.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    mainSlider.style.display = 'block';
    latest_movie.style.display = 'block';
    pagenumber.style.display = 'block';
    slider_btn.style.display = 'block';
});

// Register Form
document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  let username = event.target.username.value;
  let email = event.target.email.value;
  let password = event.target.password.value;

  // Check if the password is at least 8 characters long
  if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
  }

  let newUser = {
      username: username,
      email: email,
      password: password
  };

  users.push(newUser);

  // alert('User registered successfully!');
  console.log(users);
  event.target.reset();

  loginLink.click();
});

// Login Form
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  let email = event.target.email.value;
  let password = event.target.password.value;

  // Check if the password is at least 8 characters long


  // Assuming you have admin logic here
  if (email === 'admin@gmail.com' && password === '1') {
      // alert('Admin login successful! Redirecting to Admin Page...');
      window.location.href = 'index.html'; // Redirect to the admin's home page
      return; 
  }
  else {
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
  }
  if(checkboxbtn == false ) 
  {
    alert('you need to cconfirm to the terms & conditions please ')
  }
  }

  let userFound = users.find(user => user.email === email && user.password === password);

  if (userFound) {
      // alert('Login successful! Welcome, ' + userFound.username);
      
      // Set the user as logged in in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', userFound.username); // Store the username
      localStorage.setItem('email', userFound.email); // Store the email
      // Redirect to home page
      window.location.href = 'main.html';
      btnLogin.style.display = 'none';

  } else {
      alert('Invalid email or password. Please try again.');
  }

  event.target.reset();
});

// Profile Page JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the logged-in user's information
    let username = localStorage.getItem('username');
    let email = localStorage.getItem('email');

    // Populate profile with stored information
    document.getElementById('username').textContent = username;
    document.querySelector('.profile-email').textContent = email;

    // Modal elements
    const modal = document.getElementById('editModal');
    const closeModal = document.querySelector('.close');
    const editForm = document.getElementById('editForm');
    const editField = document.getElementById('editField');
    let editType = ''; // Keeps track of what to edit

    function openModal(type) {
        editType = type;
        modal.style.display = 'block';
        editField.focus();
    }

    document.getElementById('editUsername').addEventListener('click', () => openModal('username'));
    document.getElementById('editEmail').addEventListener('click', () => openModal('email'));
    document.getElementById('editPassword').addEventListener('click', () => openModal('password'));

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    editForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let newValue = editField.value;

        switch (editType) {
            case 'username':
                document.getElementById('username').textContent = newValue;
                localStorage.setItem('username', newValue);
                break;
            case 'email':
                document.querySelector('.profile-email').textContent = newValue;
                localStorage.setItem('email', newValue);
                break;
            case 'password':
                // Implement password update logic
                alert('Password change feature is not implemented.');
                break;
        }

        modal.style.display = 'none';
    });
});


  
  
  
  