function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'admin@test.com' && password === '123456') {
    window.location.href = 'users.html';
  } else {
    alert('Invalid email or password');
  }
}
