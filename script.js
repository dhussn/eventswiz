const allEvents = [
  { name: "Live Concert", category: "Music", location: "12345" },
  { name: "Art Workshop", category: "Workshops", location: "12345" },
  { name: "Food Festival", category: "Festivals", location: "67890" },
  { name: "Football Match", category: "Sports", location: "12345" },
];

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');

  // Check if we need to render events
  if (pageId === 'allEvents') {
    renderEvents();
  }
}

function renderEvents() {
  const eventList = document.getElementById('eventList');
  eventList.innerHTML = '';  // Clear current list

  allEvents.forEach(event => {
    const li = document.createElement('li');
    li.textContent = `${event.name} - ${event.category}`;
    eventList.appendChild(li);
  });
}

function searchEvents() {
  const category = document.getElementById('categoryDropdown').value;
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  
  // Filter events based on category and search input
  const filteredEvents = allEvents.filter(event =>
    (category === "" || event.category === category) &&
    event.name.toLowerCase().includes(searchInput)
  );

  const eventList = document.getElementById('eventList');
  eventList.innerHTML = '';  // Clear current list

  if (filteredEvents.length > 0) {
    filteredEvents.forEach(event => {
      const li = document.createElement('li');
      li.textContent = `${event.name} - ${event.category}`;
      eventList.appendChild(li);
    });
  } else {
    eventList.innerHTML = '<li>No events found</li>';
  }
}

function logout() {
  // Clear login and signup inputs
  document.getElementById('signupEmail').value = '';
  document.getElementById('signupPassword').value = '';
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';

  // Show the initial page
  showPage('page1');
}

// This will trigger the render of events when the page loads for the first time
document.addEventListener('DOMContentLoaded', () => {
  showPage('page1');
});
