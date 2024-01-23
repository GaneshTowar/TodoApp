import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(3, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  })

export const signUpValidationSchema  = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(4, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    Confirmpassword : yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
  })
  


