// Show specific page and hide others
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Login function
function login() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email && password) {
        // Clear fields and show welcome page
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        showPage('welcome-page');
    } else {
        alert('Please enter both email and password.');
    }
}

// Logout function
function logout() {
    showPage('login-page');
}

// Show Upload Recipe page
function showUploadPage() {
    showPage('upload-recipe-page');
}

// Show Retrieve Recipe page
function showRetrievePage() {
    showPage('retrieve-recipe-page');
}

// Show Invite Friend page
function showInvitePage() {
    showPage('invite-page');
}

// Save Recipe function
function saveRecipe() {
    const recipePhoto = document.getElementById('recipe-photo').files[0];
    const recipeName = document.getElementById('recipe-name').value.trim();
    const recipeCategory = document.getElementById('recipe-category').value;
    const recipeNote = document.getElementById('recipe-note').value.trim();

    if (recipeName) {
        alert(`Recipe "${recipeName}" saved successfully.`);
        // Clear fields
        document.getElementById('recipe-photo').value = '';
        document.getElementById('recipe-name').value = '';
        document.getElementById('recipe-category').value = 'appetizer';
        document.getElementById('recipe-note').value = '';
        goBack();
    } else {
        alert('Recipe Name is required.');
    }
}

// Search Recipe function
function searchRecipe() {
    const searchName = document.getElementById('search-name').value.trim();
    const searchCategory = document.getElementById('search-category').value;

    alert(`Searching for recipes with name: "${searchName}" and category: "${searchCategory}"`);
    goBack();
}

// Send Invite function
function sendInvite() {
    const inviteEmail = document.getElementById('invite-email').value.trim();

    if (inviteEmail) {
        alert(`Invitation sent to ${inviteEmail}`);
        document.getElementById('invite-email').value = '';
        goBack();
    } else {
        alert('Please enter an email address.');
    }
}

// Go back to the welcome page
function goBack() {
    showPage('welcome-page');
}

// Initialize the app by showing the login page
showPage('login-page');
