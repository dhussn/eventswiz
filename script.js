// Dummy Events Data
const dummyEvents = [
  { name: "Jazz Concert", category: "Music", zipcode: "10001" },
  { name: "Art Workshop", category: "Workshops & Classes", zipcode: "10001" },
  { name: "Book Talk", category: "Speakers & Talks", zipcode: "90001" },
];

// Page Navigation
function switchPage(pageId) {
  document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

// Signup Logic
function signup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (email && password) {
    alert("Signup successful!");
    switchPage("loginPage");
  } else {
    alert("Please fill out all fields.");
  }
}

// Login Logic
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (email && password) {
    alert("Login successful!");
    switchPage("homePage");
  } else {
    alert("Invalid email or password.");
  }
}

// Logout Logic
document.getElementById("logoutBtn").addEventListener("click", () => {
  document.querySelectorAll(".input-box").forEach(input => (input.value = ""));
  switchPage("loginPage");
});

// Search Events
document.getElementById("searchBtn").addEventListener("click", () => {
  const zipcode = document.getElementById("zipcodeInput").value;
  const category = document.getElementById("categoryDropdown").value;
  const filteredEvents = dummyEvents.filter(event => {
    return event.zipcode === zipcode && (!category || event.category === category);
  });

  const eventsContainer = document.getElementById("eventsContainer");
  eventsContainer.innerHTML = "";

  if (filteredEvents.length > 0) {
    filteredEvents.forEach(event => {
      const eventItem = document.createElement("div");
      eventItem.className = "event-item";
      eventItem.textContent = `${event.name} - ${event.category}`;
      eventsContainer.appendChild(eventItem);
    });
  } else {
    eventsContainer.textContent = "No events found for this zipcode.";
  }
});
