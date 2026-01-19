# Authentication System Documentation

The authentication system in the TechHaven project is simulated entirely on the client-side using **Vanilla JavaScript** and the browser's **LocalStorage** API. This approach meets the assignment requirement for simulating user authentication without a backend server.

## 1. Data Storage

All user data is stored in the browser's LocalStorage under two main keys:

| LocalStorage Key | Data Stored | Purpose |
| :--- | :--- | :--- |
| `users` | An array of user objects: `[{username, email, password}, ...]` | Stores all registered user credentials (simulated database). |
| `currentUser` | A single user object: `{username, email}` | Stores the session information for the currently logged-in user. This key is cleared upon logout. |

**Note:** Since LocalStorage is client-side, this implementation is **not secure** and is only suitable for demonstration or mock-up purposes.

## 2. Client-Side Validation

The `js/auth.js` file implements robust client-side validation for both the signup and login forms.

### Signup Validation Rules:

*   **Username:** Must be at least 3 characters long.
*   **Email:** Must be a valid email format (checked via regex).
*   **Password:** Must be at least 6 characters long.
*   **Confirm Password:** Must exactly match the value in the Password field.
*   **Uniqueness:** The email address must not already exist in the `users` array in LocalStorage.

If any validation fails, an error message is displayed next to the corresponding input field, and the form submission is prevented.

## 3. Key Functions in `js/auth.js`

| Function | Description |
| :--- | :--- |
| `getUsers()` | Retrieves the array of registered users from LocalStorage. |
| `saveUsers(users)` | Writes the updated array of users back to LocalStorage. |
| `validateEmail(email)` | A utility function using a regular expression to check for a valid email format. |
| `handleSignup(e)` | Handles the signup form submission, performs validation, checks for email uniqueness, saves the new user, and redirects to the login page. |
| `handleLogin(e)` | Handles the login form submission, checks credentials against the stored `users`, sets the `currentUser` in LocalStorage on success, and redirects to the homepage. |

## 4. Session Management (`js/main.js`)

The `js/main.js` file contains the `updateAuthUI()` function, which is called on every page load.

*   It checks for the existence of the `currentUser` key in LocalStorage.
*   If a user is logged in, it hides the "Login" and "Sign Up" links and displays the username and a "Logout" button.
*   The "Logout" button clears the `currentUser` key from LocalStorage and redirects the user to the homepage.
