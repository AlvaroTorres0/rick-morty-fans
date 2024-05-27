export function getFavoritesLocationIDs (arr) {
  // Mapeamos el arreglo de objetos para obtener solo los valores de location_id
  const locationIds = arr.map(obj => obj.location_id)

  // Unimos los valores del arreglo con una coma
  return locationIds.join(',')
}

export function getFavoritesCharactersIDs (arr) {
  // Mapeamos el arreglo de objetos para obtener solo los valores de location_id
  const charactersIds = arr.map(obj => obj.character_id)

  // Unimos los valores del arreglo con una coma
  return charactersIds.join(',')
}
