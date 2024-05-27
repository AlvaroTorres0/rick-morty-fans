import { createContext, useContext, useState, ReactNode, FC } from 'react'
import { supabase } from '../supabase/supabase.config'

interface AuthContextType {
  user: any;
  signInWithOtp: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null)

  async function signInWithOtp (email: string) {
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: 'https://example.com/welcome'
        }
      })

      if (error) {
        throw Error
      }
      setUser(data) // assuming data contains user info
    } catch (error) {
      throw new Error('Error al enviar el OTP')
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

  return (
    <AuthContext.Provider value={{ user, signInWithOtp, signOut }}>
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
