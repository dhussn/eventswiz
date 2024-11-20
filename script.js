function navigate(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

function submitSignup() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const zipcode = document.getElementById('signup-zipcode').value;
  const age = document.getElementById('signup-age').value;
  const gender = document.getElementById('signup-gender').value;

  if (!email || !password || !zipcode || !age || !gender) {
    alert('Please fill out all fields');
    return;
  }

  alert('Signup successful');
  navigate('dashboard-page');
}

function submitLogin() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (!email || !password) {
    alert('Please fill out both fields');
    return;
  }

  alert('Login successful');
  navigate('dashboard-page');
}

function searchEvents() {
  const category = document.getElementById('search-category').value;
  const name = document.getElementById('search-name').value;
  const zipcode = document.getElementById('search-zipcode').value;

  alert(`Searching for ${name || 'events'} in category ${category || 'all categories'} near ${zipcode || 'your location'}`);
}
