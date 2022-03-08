export enum UserRole {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export type user = {
  id: string,
  name: string,
  email: string,
  password: string,
  role: UserRole
}