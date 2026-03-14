This folder contains minimal example code for a Vite + React frontend that calls the backend API.
- Start your backend at http://localhost:5000 for HTTP
- During development Vite runs at http://localhost:5173 (CORS policy allows that origin)

Example usage:
1. Register:
   fetch('/api/auth/register', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ fullName: 'Test', email: 'a@b.com', password: 'Password123!' }) })

2. Login:
   fetch('/api/auth/login', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ email: 'a@b.com', password: 'Password123!' }) })
   -> returns { token }

3. Use token to call protected endpoints:
   fetch('/api/bookings/my', { headers: { 'Authorization': 'Bearer ' + token } })
