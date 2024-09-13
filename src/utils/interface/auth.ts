export interface ILoginPayload {
  username: string;
  password: string;
}

export interface ICreatePasswordPayload {
  newPassword: string;
  confirmPassword: string;
}
