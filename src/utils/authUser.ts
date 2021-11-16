export const authUser = (email: string): void =>
  localStorage.setItem('userData', email);
