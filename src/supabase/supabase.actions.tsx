import { supabase } from '../supabase/supabase.config'

export async function userIsRegistered (email: string) {
  try {
    const { data, error } = await supabase.from('users').select().eq('email', email)
    if (error) {
      throw Error
    }
    return data
  } catch (error) {
    throw new Error('Error al buscar el usuario')
  }
}

export async function registerUser (email: string, password: string) {
  try {
    const { data, error } = await supabase.from('users').insert([{ email, password }])
    if (error) {
      throw Error
    }
    return data
  } catch (error) {
    throw new Error('Error al registrar el usuario')
  }
}
