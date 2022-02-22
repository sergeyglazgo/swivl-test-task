const BASE_URL = 'https://api.github.com/users';

export async function getUsers() {
  const response = await fetch(BASE_URL);

  return response.json();
}

export async function getUser(login: string) {
  const response = await fetch(`${BASE_URL}/${login}`);

  return response.json();
}
