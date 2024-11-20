const allEvents = [
  { name: "Live Concert", category: "Music" },
  { name: "Art Workshop", category: "Workshops" },
  { name: "Food Festival", category: "Festivals" },
  { name: "Football Match", category: "Sports" },
  { name: "Movie Night", category: "Movies" },
  { name: "Community Clean-up", category: "Community" },
  { name: "Theater Play", category: "Theater" },
];

let favoredEvents = [];
let attendedEvents = [];

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

function renderEvents() {
  const eventList = document.getElementById('allEventList');
  eventList.innerHTML = '';
  allEvents.forEach(event => {
    const li = document.createElement('li');
    li.textContent = `${event.name} - ${event.category}`;
    const favButton = document.createElement('button');
    favButton.textContent = "Favorite";
    favButton.onclick = () => addToFavored(event);
    const attendButton = document.createElement('button');
    attendButton.textContent = "Attended";
    attendButton.onclick = () => markAsAttended(event);
    li.appendChild(favButton);
    li.appendChild(attendButton);
    eventList.appendChild(li);
  });
}

function searchEvents() {
  const category = document.getElementById('categoryDropdown').value;
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const results = allEvents.filter(event => 
    (category === "" || event.category === category) && 
    event.name.toLowerCase().includes(searchInput)
  );

  const resultList = document.getElementById('searchResults');
  resultList.innerHTML = results.length
    ? results.map(event => `<li>${event.name} - ${event.category}</li>`).join("")
    : "<li>No events found</li>";
}

function addToFavored(event) {
  if (!favoredEvents.includes(event)) {
    favoredEvents.push(event);
    alert("Event added to favorites!");
  }
}

function markAsAttended(event) {
  if (!attendedEvents.includes(event)) {
    attendedEvents.push(event);
    alert("Event marked as attended!");
  }
}

function renderFavoredEvents() {
  const list = document.getElementById('favoredEventList');
  list.innerHTML = favoredEvents.length
    ? favoredEvents.map(event => `<li>${event.name} - ${event.category}</li>`).join("")
    : "<li>No favored events</li>";
}

function renderAttendedEvents() {
  const list = document.getElementById('attendedEventList');
