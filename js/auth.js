// Authentication Logic using LocalStorage

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});

// Helper to get users from LocalStorage
function getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

// Helper to save users to LocalStorage
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Client-side validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function handleSignup(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;

    // Reset errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters.';
        isValid = false;
    }

    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    if (!isValid) return;

    const users = getUsers();
    if (users.find(u => u.email === email)) {
        document.getElementById('emailError').textContent = 'Email already registered.';
        return;
    }

    const newUser = { username, email, password };
    users.push(newUser);
    saveUsers(users);

    alert('Registration successful! Please login.');
    window.location.href = 'login.html';
}

function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Reset errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify({
            username: user.username,
            email: user.email
        }));
        window.location.href = 'index.html';
    } else {
        document.getElementById('passwordError').textContent = 'Invalid email or password.';
    }
}
