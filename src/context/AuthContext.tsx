import { createContext, useContext, useState, ReactNode, FC, useEffect } from 'react'
import { supabase } from '../supabase/supabase.config'
import { User } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom'
import { SupabaseUser } from '../d'

interface AuthContextType {
  user: SupabaseUser;
  signInWithOtp: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState<User | undefined>()

  async function signInWithOtp (email: string) {
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: 'https://rick-morty-fans.netlify.app/'
        }
      })

      if (error) {
        throw Error
      }
      setUser(data.user ? data.user : undefined)
    } catch (error) {
      throw new Error('Error al enviar el OTP')
    }
  }

  async function signUp (email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      })

      if (error) {
        throw Error
      }

      const { data: userData, error: userError } = await supabase
        .from('users')
        .insert({ email, password })

      if (userError) {
        throw Error
      }

      if (userData) {
        console.log('Usuario registrado')
      }

      setUser(data.user ? data.user : undefined)
    } catch (error) {
      throw new Error('Error al registrar usuario')
    }
  }

  async function signOut () {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        throw Error
      }
    } catch (error) {
      throw new Error('Error al cerrar sesión')
    }
  }

  useEffect(() => {
    // @ts-expect-error event is not a property valid for the onAuthStateChange method
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session == null) {
        navigate('/iniciar-sesion', { replace: true })
      } else {
        navigate('/', { replace: true })
        setUser(session.user)
      }
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  return (
    // @ts-expect-error value is not a property valid for the AuthContextProvider component
    <AuthContext.Provider value={{ user, signInWithOtp, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthContextProvider')
  }
  return context
}
