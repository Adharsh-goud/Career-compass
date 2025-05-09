// DOM Elements
// Navigation
const navLinks = document.querySelectorAll('nav ul li a');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');

// Sections
const sections = document.querySelectorAll('.section');

// Home Section
const startQuizBtn = document.getElementById('start-quiz-btn');

// Quiz Section
const quizQuestions = document.querySelectorAll('.quiz-question');
const progressBar = document.querySelector('.progress');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitQuizBtn = document.getElementById('submit-quiz-btn');

// Results Section
const recommendationEl = document.getElementById('recommendation');
const pathDescriptionEl = document.getElementById('path-description');
const exploreBranchesBtn = document.getElementById('explore-branches-btn');
const retakeQuizBtn = document.getElementById('retake-quiz-btn');

// Paths Section
const pathIntroEl = document.getElementById('path-intro');
const pathBtns = document.querySelectorAll('.path-btn');
const btechBranches = document.getElementById('btech-branches');
const degreeBranches = document.getElementById('degree-branches');
const branchCards = document.querySelectorAll('.branch-card');

// Colleges Section
const collegesForBranchEl = document.getElementById('colleges-for-branch');
const collegeListEl = document.getElementById('college-list');
const backToBranchesBtn = document.getElementById('back-to-branches-btn');

// Contact Section
const feedbackForm = document.getElementById('feedback-form');

// Global Variables
let currentQuestion = 1;
let quizAnswers = {};
let recommendation = '';
let selectedPath = '';
let selectedBranch = '';

// College Data
const collegeData = {
  // B.Tech Branches
  'cse': [
    { name: 'Indian Institute of Technology (IIT) Delhi', location: 'New Delhi', url: 'https://home.iitd.ac.in/' },
    { name: 'Indian Institute of Technology (IIT) Bombay', location: 'Mumbai', url: 'https://www.iitb.ac.in/' },
    { name: 'Birla Institute of Technology and Science (BITS)', location: 'Pilani', url: 'https://www.bits-pilani.ac.in/' },
    { name: 'National Institute of Technology (NIT)', location: 'Tiruchirappalli', url: 'https://www.nitt.edu/' },
    { name: 'International Institute of Information Technology (IIIT)', location: 'Hyderabad', url: 'https://www.iiit.ac.in/' }
  ],
  'ece': [
    { name: 'Indian Institute of Technology (IIT) Kharagpur', location: 'Kharagpur', url: 'http://www.iitkgp.ac.in/' },
    { name: 'National Institute of Technology (NIT)', location: 'Warangal', url: 'https://www.nitw.ac.in/' },
    { name: 'Delhi Technological University (DTU)', location: 'New Delhi', url: 'http://dtu.ac.in/' },
    { name: 'PSG College of Technology', location: 'Coimbatore', url: 'https://www.psgtech.edu/' },
    { name: 'Manipal Institute of Technology', location: 'Manipal', url: 'https://manipal.edu/mit.html' }
  ],
  'eee': [
    { name: 'Indian Institute of Technology (IIT) Roorkee', location: 'Roorkee', url: 'https://www.iitr.ac.in/' },
    { name: 'National Institute of Technology (NIT)', location: 'Surathkal', url: 'https://www.nitk.ac.in/' },
    { name: 'College of Engineering, Anna University', location: 'Chennai', url: 'https://www.annauniv.edu/' },
    { name: 'Jadavpur University', location: 'Kolkata', url: 'http://www.jaduniv.edu.in/' },
    { name: 'Thapar Institute of Engineering and Technology', location: 'Patiala', url: 'http://www.thapar.edu/' }
  ],
  'civil': [
    { name: 'Indian Institute of Technology (IIT) Madras', location: 'Chennai', url: 'https://www.iitm.ac.in/' },
    { name: 'National Institute of Technology (NIT)', location: 'Calicut', url: 'http://www.nitc.ac.in/' },
    { name: 'College of Engineering, Pune (COEP)', location: 'Pune', url: 'https://www.coep.org.in/' },
    { name: 'Delhi Technological University (DTU)', location: 'New Delhi', url: 'http://dtu.ac.in/' },
    { name: 'BMS College of Engineering', location: 'Bangalore', url: 'https://www.bmsce.ac.in/' }
  ],
  'mechanical': [
    { name: 'Indian Institute of Technology (IIT) Kanpur', location: 'Kanpur', url: 'https://www.iitk.ac.in/' },
    { name: 'National Institute of Technology (NIT)', location: 'Trichy', url: 'https://www.nitt.edu/' },
    { name: 'PSG College of Technology', location: 'Coimbatore', url: 'https://www.psgtech.edu/' },
    { name: 'Vellore Institute of Technology (VIT)', location: 'Vellore', url: 'https://vit.ac.in/' },
    { name: 'RV College of Engineering', location: 'Bangalore', url: 'https://www.rvce.edu.in/' }
  ],
  'ai': [
    { name: 'Indian Institute of Technology (IIT) Hyderabad', location: 'Hyderabad', url: 'https://iith.ac.in/' },
    { name: 'International Institute of Information Technology (IIIT)', location: 'Bangalore', url: 'https://www.iiitb.ac.in/' },
    { name: 'Birla Institute of Technology and Science (BITS)', location: 'Goa', url: 'https://www.bits-pilani.ac.in/goa/' },
    { name: 'Manipal Institute of Technology', location: 'Manipal', url: 'https://manipal.edu/mit.html' },
    { name: 'Vellore Institute of Technology (VIT)', location: 'Chennai', url: 'https://chennai.vit.ac.in/' }
  ],
  
  // Degree Branches
  'bsc-mpc': [
    { name: 'St. Stephen\'s College', location: 'Delhi', url: 'https://www.ststephens.edu/' },
    { name: 'Loyola College', location: 'Chennai', url: 'https://www.loyolacollege.edu/' },
    { name: 'Fergusson College', location: 'Pune', url: 'https://www.fergusson.edu/' },
    { name: 'Christ University', location: 'Bangalore', url: 'https://christuniversity.in/' },
    { name: 'Mount Carmel College', location: 'Bangalore', url: 'https://www.mccblr.edu.in/' }
  ],
  'bsc-bzc': [
    { name: 'Hindu College', location: 'Delhi', url: 'https://www.hinducollege.ac.in/' },
    { name: 'St. Xavier\'s College', location: 'Mumbai', url: 'https://xaviers.edu/' },
    { name: 'Presidency College', location: 'Chennai', url: 'https://www.presidencychennai.edu.in/' },
    { name: 'Mount Carmel College', location: 'Bangalore', url: 'https://www.mccblr.edu.in/' },
    { name: 'Hansraj College', location: 'Delhi', url: 'https://www.hansrajcollege.ac.in/' }
  ],
  'bcom': [
    { name: 'Shri Ram College of Commerce', location: 'Delhi', url: 'https://www.srcc.edu/' },
    { name: 'Christ University', location: 'Bangalore', url: 'https://christuniversity.in/' },
    { name: 'Loyola College', location: 'Chennai', url: 'https://www.loyolacollege.edu/' },
    { name: 'Narsee Monjee College of Commerce and Economics', location: 'Mumbai', url: 'https://www.nmcollege.in/' },
    { name: 'St. Xavier\'s College', location: 'Kolkata', url: 'https://www.sxccal.edu/' }
  ],
  'ba': [
    { name: 'Lady Shri Ram College for Women', location: 'Delhi', url: 'https://www.lsr.edu.in/' },
    { name: 'St. Stephen\'s College', location: 'Delhi', url: 'https://www.ststephens.edu/' },
    { name: 'Presidency University', location: 'Kolkata', url: 'https://www.presiuniv.ac.in/' },
    { name: 'Loyola College', location: 'Chennai', url: 'https://www.loyolacollege.edu/' },
    { name: 'FLAME University', location: 'Pune', url: 'https://www.flame.edu.in/' }
  ],
  'bba': [
    { name: 'Christ University', location: 'Bangalore', url: 'https://christuniversity.in/' },
    { name: 'Symbiosis Center for Management Studies', location: 'Pune', url: 'https://www.scmspune.ac.in/' },
    { name: 'Narsee Monjee Institute of Management Studies', location: 'Mumbai', url: 'https://www.nmims.edu/' },
    { name: 'Shaheed Sukhdev College of Business Studies', location: 'Delhi', url: 'https://sscbsdu.ac.in/' },
    { name: 'St. Xavier\'s College', location: 'Kolkata', url: 'https://www.sxccal.edu/' }
  ],
  'bca': [
    { name: 'Christ University', location: 'Bangalore', url: 'https://christuniversity.in/' },
    { name: 'Symbiosis Institute of Computer Studies and Research', location: 'Pune', url: 'https://www.sicsr.ac.in/' },
    { name: 'Indraprastha College for Women', location: 'Delhi', url: 'https://www.ipcollege.ac.in/' },
    { name: 'Loyola College', location: 'Chennai', url: 'https://www.loyolacollege.edu/' },
    { name: 'St. Xavier\'s College', location: 'Mumbai', url: 'https://xaviers.edu/' }
  ]
};

// Init function
function init() {
  setupEventListeners();
  showSection('home');
}

// Event Listeners
function setupEventListeners() {
  // Mobile menu toggle
  mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  
  // Navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      showSection(targetId);
      updateActiveNavLink(link);
      
      // Close mobile menu when a link is clicked
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
      }
    });
  });
  
  // Start Quiz Button
  startQuizBtn.addEventListener('click', () => {
    showSection('quiz');
    updateActiveNavLink(document.querySelector('a[href="#quiz"]'));
  });
  
  // Quiz Navigation
  prevBtn.addEventListener('click', goToPreviousQuestion);
  nextBtn.addEventListener('click', goToNextQuestion);
  submitQuizBtn.addEventListener('click', submitQuiz);
  
  // Quiz Inputs
  document.querySelectorAll('.option input').forEach(input => {
    input.addEventListener('change', () => {
      quizAnswers[input.name] = input.value;
    });
  });
  
  // Results Section Buttons
  exploreBranchesBtn.addEventListener('click', () => {
    showSection('paths');
    updateActiveNavLink(document.querySelector('a[href="#paths"]'));
    selectPathBasedOnRecommendation();
  });
  
  retakeQuizBtn.addEventListener('click', resetQuiz);
  
  // Path Selection
  pathBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedPath = btn.getAttribute('data-path');
      updatePathSelection();
    });
  });
  
  // Branch Selection
  branchCards.forEach(card => {
    card.addEventListener('click', () => {
      selectedBranch = card.getAttribute('data-branch');
      showCollegesForBranch();
    });
  });
  
  // Back to Branches Button
  backToBranchesBtn.addEventListener('click', () => {
    showSection('paths');
    updateActiveNavLink(document.querySelector('a[href="#paths"]'));
  });
  
  // Contact Form Submission
  feedbackForm.addEventListener('submit', handleFormSubmit);
}

// Show/Hide Sections
function showSection(sectionId) {
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Update Active Navigation Link
function updateActiveNavLink(activeLink) {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// Quiz Functions
function goToNextQuestion() {
  if (currentQuestion < quizQuestions.length) {
    // Validate current question is answered
    const currentInputName = `q${currentQuestion}`;
    if (!quizAnswers[currentInputName]) {
      alert('Please select an answer before proceeding.');
      return;
    }
    
    document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`).classList.remove('active');
    currentQuestion++;
    document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`).classList.add('active');
    
    // Update progress bar
    const progressWidth = (currentQuestion / quizQuestions.length) * 100;
    progressBar.style.width = `${progressWidth}%`;
    
    // Update buttons
    prevBtn.disabled = false;
    
    if (currentQuestion === quizQuestions.length) {
      nextBtn.style.display = 'none';
      submitQuizBtn.style.display = 'block';
    }
  }
}

function goToPreviousQuestion() {
  if (currentQuestion > 1) {
    document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`).classList.remove('active');
    currentQuestion--;
    document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`).classList.add('active');
    
    // Update progress bar
    const progressWidth = (currentQuestion / quizQuestions.length) * 100;
    progressBar.style.width = `${progressWidth}%`;
    
    // Update buttons
    if (currentQuestion === 1) {
      prevBtn.disabled = true;
    }
    
    if (currentQuestion < quizQuestions.length) {
      nextBtn.style.display = 'block';
      submitQuizBtn.style.display = 'none';
    }
  }
}

function submitQuiz() {
  // Validate last question is answered
  const lastInputName = `q${quizQuestions.length}`;
  if (!quizAnswers[lastInputName]) {
    alert('Please select an answer before submitting.');
    return;
  }
  
  // Calculate results
  calculateRecommendation();
  
  // Show results
  showSection('results');
  displayResults();
}

function calculateRecommendation() {
  let techScore = 0;
  let degreeScore = 0;
  
  // Count tech and degree answers
  Object.values(quizAnswers).forEach(answer => {
    if (answer === 'tech') {
      techScore++;
    } else if (answer === 'degree') {
      degreeScore++;
    }
    // neutral answers don't contribute to either score
  });
  
  // Determine recommendation
  if (techScore > degreeScore) {
    recommendation = 'B.Tech';
  } else if (degreeScore > techScore) {
    recommendation = 'Degree';
  } else {
    // In case of a tie, check for stronger preferences
    const strongTechAnswers = Object.values(quizAnswers).filter(a => a === 'tech').length;
    const strongDegreeAnswers = Object.values(quizAnswers).filter(a => a === 'degree').length;
    
    if (strongTechAnswers > strongDegreeAnswers) {
      recommendation = 'B.Tech';
    } else {
      recommendation = 'Degree';
    }
  }
}

function displayResults() {
  recommendationEl.textContent = recommendation;
  
  if (recommendation === 'B.Tech') {
    pathDescriptionEl.textContent = 'technology-focused program that emphasizes engineering principles, problem-solving, and practical application of scientific concepts.';
  } else {
    pathDescriptionEl.textContent = 'program that offers a broader education in arts, sciences, or commerce with options to specialize in your field of interest.';
  }
}

function resetQuiz() {
  // Reset quiz state
  currentQuestion = 1;
  quizAnswers = {};
  recommendation = '';
  
  // Reset UI
  document.querySelectorAll('.quiz-question').forEach(q => q.classList.remove('active'));
  document.querySelector('.quiz-question[data-question="1"]').classList.add('active');
  
  document.querySelectorAll('.option input').forEach(input => {
    input.checked = false;
  });
  
  progressBar.style.width = '16.66%';
  prevBtn.disabled = true;
  nextBtn.style.display = 'block';
  submitQuizBtn.style.display = 'none';
  
  // Show quiz section
  showSection('quiz');
  updateActiveNavLink(document.querySelector('a[href="#quiz"]'));
}

// Path and Branch Functions
function selectPathBasedOnRecommendation() {
  const pathToSelect = recommendation.toLowerCase() === 'b.tech' ? 'btech' : 'degree';
  selectedPath = pathToSelect;
  
  // Update path selection UI
  updatePathSelection();
  
  // Update intro text
  pathIntroEl.textContent = `Based on your quiz results, we recommend the ${recommendation} path. Explore the branches below:`;
}

function updatePathSelection() {
  // Update path buttons
  pathBtns.forEach(btn => {
    if (btn.getAttribute('data-path') === selectedPath) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Show selected path branches
  if (selectedPath === 'btech') {
    btechBranches.classList.add('active');
    degreeBranches.classList.remove('active');
  } else {
    btechBranches.classList.remove('active');
    degreeBranches.classList.add('active');
  }
}

function showCollegesForBranch() {
  const colleges = collegeData[selectedBranch];
  if (!colleges) return;
  
  // Set heading based on selected branch
  const branchName = document.querySelector(`.branch-card[data-branch="${selectedBranch}"] h4`).textContent;
  collegesForBranchEl.textContent = `Top Colleges for ${branchName}`;
  
  // Clear previous college list
  collegeListEl.innerHTML = '';
  
  // Populate college list
  colleges.forEach(college => {
    const collegeItem = document.createElement('div');
    collegeItem.className = 'college-item';
    
    collegeItem.innerHTML = `
      <div class="college-name">${college.name}</div>
      <div class="college-location">${college.location}</div>
      <a href="${college.url}" class="college-link" target="_blank">Visit Website</a>
    `;
    
    collegeListEl.appendChild(collegeItem);
  });
  
  // Show colleges section
  showSection('colleges');
  updateActiveNavLink(document.querySelector('a[href="#colleges"]'));
}

// Form Handling
function handleFormSubmit(e) {
  e.preventDefault();
  
  // Basic validation
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  if (!nameInput.value.trim()) {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }
  
  if (!emailInput.value.trim()) {
    alert('Please enter your email.');
    emailInput.focus();
    return;
  }
  
  if (!isValidEmail(emailInput.value)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return;
  }
  
  if (!messageInput.value.trim()) {
    alert('Please enter your message.');
    messageInput.focus();
    return;
  }
  
  // In a real application, this would send the data to a server
  // For now, we'll just show a success message
  alert('Thank you for your feedback! We will get back to you soon.');
  
  // Reset form
  feedbackForm.reset();
}

// Helper Functions
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', init);