import { useState, useEffect } from 'react'
import { getApiData } from '../service/APIService'
import { APIResponse, Character } from '../d'

export function useCharacters () {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [pag, setPag] = useState(1)
  const [currentCharacter, setCurrentCharacter] = useState(0)

  useEffect(() => {
    getCharacters() // Cargar personajes cuando el componente se monta
  }, [])

  async function getCharacters () {
    try {
      setLoading(true)
      const data: APIResponse = await getApiData({ url: `https://rickandmortyapi.com/api/character/?page=${pag}` })
      setCharacters((prevCharacters) => {
        // Filtrar los personajes nuevos para evitar duplicados
        const newCharacters = data.results.filter((newCharacter) => {
          return !prevCharacters.some((prevCharacter) => prevCharacter.id === newCharacter.id)
        })
        // Concatenar los personajes filtrados al arreglo existente
        return prevCharacters.concat(newCharacters as Character[])
      })

      setLoading(false)
      setPag(pag + 1)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }

  async function handleNextCharacter () {
    if (currentCharacter === characters.length - 3) {
      await getCharacters()
    }
    setCurrentCharacter((prevCharacter) => (prevCharacter + 1) % characters.length)
  }

  async function handlePrevCharacter () {
    if (currentCharacter === 0) {
      await getCharacters()
    }
    setCurrentCharacter((prevCharacter) => (prevCharacter - 1 + characters.length) % characters.length)
  }

  return { characters, loading, error, handleNextCharacter, handlePrevCharacter, currentCharacter }
}
