//Calling the API from the React frontend

export async function listCourses() {
  const res = await fetch('/api/courses');
  return res.json();
}

export async function register(email, password, fullName) {
  const res = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, fullName })
  });
  return res;
}

export async function login(email, password) {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return res.json(); // { token }
}

export async function getMyBookings(token) {
  const res = await fetch('/api/bookings/my', {
    headers: { 'Authorization': 'Bearer ' + token }
  });
  return res.json();
}
