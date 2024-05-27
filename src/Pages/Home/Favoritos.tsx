import React, { useEffect } from 'react'
import { getFavoritesCharactersIds, getFavoritesLocationsIds } from '../../supabase/supabase.actions'
import { useAuth } from '../../context/AuthContext'
import Card from '../../components/Card'
import LocationCard from '../../components/LocationCard'
import { useFavoritesCharacters } from '../../hooks/useFavoritesCharacters'
import { useFavoritesLocations } from '../../hooks/useFavoritesLocations'

const Favoritos: React.FC = () => {
  const { user } = useAuth()
  const { favoriteCharacters, setFavoriteCharacters, loading, error, getFavoriteCharacters, handleNextCharacter, handlePrevCharacter, currentFavoriteCharacter } = useFavoritesCharacters()
  const { favoritesLocations, setFavoritesLocations, loadingFavoriteLocations, errorLoadingFavoriteLocations, getFavoritesLocations, handleNextLocation, handlePrevLocation, currentFavoriteLocation } = useFavoritesLocations()

  const handleGetFavoritesCharacters = async () => {
    try {
      const favoritesCharactersIDs = await getFavoritesCharactersIds(user?.email)
      getFavoriteCharacters(favoritesCharactersIDs)
    } catch (error) {
      console.error(error)
    }
  }
  const handleGetFavoritesLocations = async () => {
    try {
      const favoritesLocationsIDs = await getFavoritesLocationsIds(user?.email)
      getFavoritesLocations(favoritesLocationsIDs)
    } catch (error) {
      console.error(error)
    }
  }
  const handleRemoveCharacterFromFavorites = (id: number) => {
    setFavoriteCharacters((prevFavorites) => prevFavorites.filter((character) => character.id !== id))
  }

  const handleRemoveLocationFromFavorites = (id: number) => {
    setFavoritesLocations((prevFavorites) => prevFavorites.filter((location) => location.id !== id))
  }

  useEffect(() => {
    handleGetFavoritesCharacters()
    handleGetFavoritesLocations()
  }, [])

  return (
    <div className='flex flex-col gap-16'>
      <section className='flex flex-col gap-10'>
            <div>
              <h2 className='font-principal-black primary-text-color text-5xl'>Tus personajes favoritos</h2>
            </div>
            <div className="carousel w-full flex relative">
              <div id={'slide1'} className="carousel-item">
                  {
                      favoriteCharacters !== undefined && favoriteCharacters.length > 0
                        ? <>
                            <Card
                              id={favoriteCharacters[currentFavoriteCharacter].id}
                              name={favoriteCharacters[currentFavoriteCharacter].name}
                              status={favoriteCharacters[currentFavoriteCharacter].status}
                              species={favoriteCharacters[currentFavoriteCharacter].species}
                              image={favoriteCharacters[currentFavoriteCharacter].image}
                              origin={favoriteCharacters[currentFavoriteCharacter].origin}
                              isFavorite={true}
                              onRemove={handleRemoveCharacterFromFavorites}
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/4 lg:top-2/4">
                              <button onClick={() => handlePrevCharacter()} className="btn btn-circle">❮</button>
                              <button onClick={() => handleNextCharacter()}className="btn btn-circle">❯</button>
                            </div>
                          </>
                        : (
                          <p>No hay</p>
                          )
                  }
              </div>
            </div>
      </section>

      <section className='flex flex-col gap-10'>
            <div>
              <h2 className='font-principal-black primary-text-color text-5xl'>Tus ubicaciones favoritas</h2>
            </div>
            <div className="carousel w-full flex">
              <div id={'slide1'} className="carousel-item relative">
                  {
                      favoritesLocations !== undefined && favoritesLocations.length > 0
                        ? <>
                            <LocationCard
                              id={favoritesLocations[currentFavoriteLocation].id}
                              name={favoritesLocations[currentFavoriteLocation].name}
                              type={favoritesLocations[currentFavoriteLocation].type}
                              dimension={favoritesLocations[currentFavoriteLocation].dimension}
                              isFavorite={true}
                              onRemove={handleRemoveLocationFromFavorites}
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-5 top-[90%] lg:top-[10%]">
                              <button onClick={() => handlePrevLocation()} className="btn btn-circle">❮</button>
                              <button onClick={() => handleNextLocation()}className="btn btn-circle">❯</button>
                            </div>
                          </>
                        : (
                          <p>No hay</p>
                          )
                  }
              </div>
          </div>
      </section>
    </div>
  )
}

export default Favoritos
