export const userData = localStorage.getItem('userData');
export const isUserAdmin = localStorage.getItem('isAdmin');
export const setIsUserAdmin = (): void => localStorage.setItem('isAdmin', 'true');
