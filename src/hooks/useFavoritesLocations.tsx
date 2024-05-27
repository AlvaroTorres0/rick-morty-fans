import { useState } from 'react'
import { getFavorites } from '../service/APIService'
import { Location, FavoriteLocation } from '../d'

export function useFavoritesLocations () {
  const [favoritesLocations, setFavoritesLocations] = useState<Location[]>([])
  const [loadingFavoriteLocations, setLoadingFavoriteLocations] = useState(false)
  const [errorLoadingFavoriteLocations, setErrorLoadingFavoriteLocations] = useState(false)
  const [currentFavoriteLocation, setCurrentFavoriteLocation] = useState(0)

  async function getFavoritesLocations (stringElements: string) {
    try {
      setLoadingFavoriteLocations(true)
      const data: FavoriteLocation[] = await getFavorites({ favoritesList: stringElements, type: 'location' })
      setFavoritesLocations(data)
      setLoadingFavoriteLocations(false)
    } catch (error) {
      setErrorLoadingFavoriteLocations(true)
      setLoadingFavoriteLocations(false)
    }
  }

  function handleNextLocation () {
    setCurrentFavoriteLocation((prevLocation) => (prevLocation + 1) % favoritesLocations.length)
  }

  function handlePrevLocation () {
    setCurrentFavoriteLocation((prevLocation) => (prevLocation - 1 + favoritesLocations.length) % favoritesLocations.length)
  }

  return { favoritesLocations, setFavoritesLocations, loadingFavoriteLocations, errorLoadingFavoriteLocations, getFavoritesLocations, handleNextLocation, handlePrevLocation, currentFavoriteLocation }
}
