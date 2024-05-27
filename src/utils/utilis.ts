import { Location, Character } from '../d'

export function getFavoritesLocationIDs (arr: Location[]) {
  const locationIds = arr.map(obj => obj.location_id)
  return locationIds.join(',')
}

export function getFavoritesCharactersIDs (arr: Character[]) {
  const charactersIds = arr.map(obj => obj.character_id)
  return charactersIds.join(',')
}
