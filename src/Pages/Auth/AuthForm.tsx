import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { InputField } from '../../common/FormComponents'

interface AuthProps {
  formType: 'login' | 'signup';
}

const AuthForm: React.FC<AuthProps> = ({ formType }) => {
  return (
    <div className='bg-[#1C1C1CBB] w-4/5 md:w-3/4 lg:w-[600px] rounded-lg px-14 py-16 flex flex-col gap-10'>
      <div>
        <h3 className='font-principal-heavy text-4xl'>Rick and Morty Fans</h3>
        <p className='font-principal-light'>
          {
            formType === 'login' ? 'Inicia sesión para continuar' : 'Crea una cuenta'
          }
        </p>
      </div>

      <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .min(
                  5,
                  'La dirección de correo debe tener al menos 5 caracteres'
                )
                .email('Direccion de correo no válida')
                .required('Debes ingresar un correo electrónico'),
              password: Yup.string()
                .min(20, 'La contraseña debe tener como mínimo 8 caracteres')
                .max(40, 'La contraseña no puede tener más de 40 caracteres')
                .required('Debes ingresar una contraseña')
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
              }, 400)
            }}
          >
            <Form className="flex flex-col gap-4">
              <InputField
                label="Correo electrónico"
                name="email"
                type="text"
                placeholder="Ej. alvaro.torres@gmail.com"
              />

              <InputField
                label="Contraseña"
                name="password"
                type="password"
                placeholder="**********"
              />

              <div className="flex flex-col gap-5">
                <button className="btn primary-color-300 w-full" type="submit">
                  {
                    formType === 'login' ? 'Iniciar sesión' : 'Crear cuenta'
                  }
                </button>

                <p className="font-principal-light">
                  {
                    formType === 'login' ? '¿No tienes cuenta? ' : '¿Ya tienes cuenta? '
                  }
                  <u className='font-principal-medium'>
                    {
                      formType === 'login'
                        ? (
                        <Link to="/signup" className="text-primary-color-300">
                          Regístrate
                        </Link>
                          )
                        : (
                        <Link to="/login" className="text-primary-color-300">
                          Inicia sesión
                        </Link>
                          )
                    }
                  </u>
                </p>
              </div>
            </Form>
          </Formik>
    </div>
  )
}

export default AuthForm
