document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Update UI based on Auth State
    updateAuthUI();
});

function updateAuthUI() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const authLinks = document.getElementById('authLinks');
    const userProfile = document.getElementById('userProfile');
    const usernameDisplay = document.getElementById('usernameDisplay');
    const logoutBtn = document.getElementById('logoutBtn');

    if (currentUser) {
        if (authLinks) authLinks.style.display = 'none';
        if (userProfile) {
            userProfile.style.display = 'flex';
            userProfile.style.alignItems = 'center';
            userProfile.style.gap = '1rem';
        }
        if (usernameDisplay) usernameDisplay.textContent = `Hi, ${currentUser.username}`;
        
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('currentUser');
                window.location.href = 'index.html';
            });
        }
    } else {
        if (authLinks) authLinks.style.display = 'block';
        if (userProfile) userProfile.style.display = 'none';
    }
}
