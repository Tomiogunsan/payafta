import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().required('Email is required'),

  password: yup.string().required('Password is required'),
});

export const signupSchema = yup.object({
  firstname: yup.string().required('Firstname is required'),
  lastname: yup.string().required('Lastname is required'),
  email: yup.string().required('Email is required'),
  phone: yup.string().required('Phone is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 character long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one special character',
    ),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Required'),
});

export const forgotPasswordSchema = yup.object({
  email: yup.string().required('Email is required'),
});

export const createNewPasswordSchema = yup.object({
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 character long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one special character',
    ),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Required'),
});

export const personalKYCSchema = yup.object({
  firstname: yup.string().required('Firstname is required'),
  lastname: yup.string().required('Lastname is required'),
  gender: yup.string().required('Gender is required'),
  date: yup.string().required('Date is required'),
  instagram: yup.string().notRequired() as yup.StringSchema<string>,
  facebooke: yup.string().notRequired() as yup.StringSchema<string>,
});

export const settlementKYCSchema = yup.object({
  bank_name: yup.string().required('Bank name is required'),
  account_number: yup
    .string()
    .min(6, 'Account number must be at least 6 digits')
    .required('Account number is required')
    .matches(/^[^a-zA-Z]+$/, 'Account number should not contain letters'),
  BVN: yup.string().required('BVN number is required'),
});
