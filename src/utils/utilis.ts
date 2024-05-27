import { FavoritesCharacters, FavoritesLocations } from '../d'

export function getFavoritesLocationIDs (arr: FavoritesLocations[]) {
  const locationIds = arr.map(obj => obj.location_id)
  return locationIds.join(',')
}

export function getFavoritesCharactersIDs (arr: FavoritesCharacters[]) {
  const charactersIds = arr.map(obj => obj.character_id)
  return charactersIds.join(',')
}
