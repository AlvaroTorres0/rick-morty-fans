import React from 'react'
import AuthForm from './AuthForm'

interface AuthProps {
  formType: 'login' | 'signup';
}

export const Auth: React.FC<AuthProps> = ({ formType }) => {
  return (
        <section className='bg-auth-page bg-cover bg-center h-screen flex justify-center items-center'>
            <AuthForm formType={formType}></AuthForm>
        </section>
  )
}
