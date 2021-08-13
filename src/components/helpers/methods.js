export function isAuthenticated() {
  const token = localStorage.getItem('token') || null;

  return token ? true : false;
}
