/// <reference types="react-scripts" />
interface UserFromServer {
  url: string,
}

interface State {
  users: User[],
  user: UserInfo | null
}

interface User {
  id: number,
  login: string,
  url: string,
  html_url: string,
  avatar_url: string,
}

interface UserInfo {
  id: number,
  login: string,
  name: string,
  avatar_url: string,
  followers: number,
  following: number,
  created_at: string,
  company: string| null,
  email: string | null,
  location: string | null,
  blog: string | null,
  bio: string | null,
}
