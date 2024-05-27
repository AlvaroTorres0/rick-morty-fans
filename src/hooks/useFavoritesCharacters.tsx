import { useState } from 'react'
import { getFavorites } from '../service/APIService'
import { Character } from '../d'

export function useFavoritesCharacters () {
  const [favoriteCharacters, setFavoriteCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [currentFavoriteCharacter, setCurrentFavoriteCharacter] = useState(0)

  async function getFavoriteCharacters (stringElements: string) {
    try {
      setLoading(true)
      const data: Character[] = await getFavorites({ favoritesList: stringElements, type: 'character' })
      setFavoriteCharacters(data)
      setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }

  function handleNextCharacter () {
    setCurrentFavoriteCharacter((prevCharacter) => (prevCharacter + 1) % favoriteCharacters.length)
  }

  function handlePrevCharacter () {
    setCurrentFavoriteCharacter((prevCharacter) => (prevCharacter - 1 + favoriteCharacters.length) % favoriteCharacters.length)
  }

  return { favoriteCharacters, loading, error, getFavoriteCharacters, handleNextCharacter, handlePrevCharacter, currentFavoriteCharacter, setFavoriteCharacters }
}
