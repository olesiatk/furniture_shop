import * as yup from 'yup';

interface UserLoginType {
  email: string;
  password: string;
}

interface User {
  name: string;
  email: string;
  password: string;
  photo: string;
}

export const isLoginDataRight = ({ email, password }: UserLoginType): boolean => {
  const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
  const isLogin = allUsers.some(
    (user: User) => user.email === email && user.password === password
  );
  return isLogin;
};

export const checkEmailForbidden = (email: string): boolean => {
  const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
  return allUsers.some((user: User) => user.email === email);
};

const passwordPattern = /^[a-zA-Z0-9]*$/;

type Fields =
  | 'name'
  | 'email'
  | 'password'
  | 'confirmPassword'
  | 'photo'
  | 'price'
  | 'description';

const validations = {
  name: yup.string().required(),
  email: yup
    .string()
    .required('required')
    .email('invalid email')
    .matches(/@gmail/i, 'email should be from gmail'),
  password: yup
    .string()
    .required('required')
    .matches(passwordPattern, 'should contain only letters and numbers'),
  confirmPassword: yup
    .string()
    .required('required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  photo: yup.string().required('required'),
  price: yup
    .number()
    .integer('just integer value')
    .positive('must be positive value')
    .max(999999, 'to hight price'),
  description: yup.string().required('required').min(30).max(400),
};

export const getSchemaValidations = (fields: Array<Fields>) => {
  const validationObject: { [index: string]: any } = {};
  fields.forEach((field) => {
    validationObject[field] = validations[field];
  });
  return yup.object().shape(validationObject);
};
