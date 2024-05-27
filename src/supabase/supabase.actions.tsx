import { supabase } from '../supabase/supabase.config'
import { getFavoritesCharactersIDs, getFavoritesLocationIDs } from '../utils/utilis'

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

export async function addCharacterToFavorites (userEmail: string, locationId: number) {
  try {
    // Primero obtenemos el registro existente para verificar si el locationId ya está presente
    const { data: existingData, error: fetchError } = await supabase
      .from('favorites_characters')
      .insert({ email: userEmail, character_id: locationId })
    if (fetchError) {
      throw Error
    }
    if (existingData) {
      throw Error
    }
  } catch (error) {
    throw new Error('Error al agregar el personaje a favoritos')
  }
}

export async function removeCharacterFromFavorites (email: string, locationId: number) {
  try {
    const { data, error } = await supabase.from('favorites_characters').delete().eq('email', email).eq('character_id', locationId)
    if (error) {
      throw Error
    }
    return data
  } catch (error) {
    throw new Error('Error al eliminar el personaje de favoritos')
  }
}

export async function getFavoritesCharactersIds (email: string) {
  try {
    const { data, error } = await supabase.from('favorites_characters').select('character_id').eq('email', email)
    if (error) {
      throw Error
    }
    const charactersIds = getFavoritesCharactersIDs(data)
    return charactersIds
  } catch (error) {
    throw new Error('Error al obtener los personajes favoritos')
  }
}

// Location actions
export async function getFavoritesLocationsIds (email: string) {
  try {
    const { data, error } = await supabase.from('favorites_locations').select('location_id').eq('email', email)
    if (error) {
      throw Error
    }
    const locationsIds = getFavoritesLocationIDs(data)
    return locationsIds
  } catch (error) {
    throw new Error('Error al obtener las locaciones favoritas')
  }
}

export async function addLocationToFavorites (userEmail: string, locationId: number) {
  try {
    // Primero obtenemos el registro existente para verificar si el locationId ya está presente
    const { data: existingData, error: fetchError } = await supabase
      .from('favorites_locations')
      .insert({ email: userEmail, location_id: locationId })
    if (fetchError) {
      throw Error
    }
    if (existingData) {
      throw Error
    }
  } catch (error) {
    throw new Error('Error al agregar el personaje a favoritos')
  }
}

export async function removeLocationFromFavorites (email: string, locationId: number) {
  try {
    const { data, error } = await supabase.from('favorites_locations').delete().eq('email', email).eq('location_id', locationId)
    if (error) {
      throw Error
    }
    return data
  } catch (error) {
    throw new Error('Error al eliminar el personaje de favoritos')
  }
}
