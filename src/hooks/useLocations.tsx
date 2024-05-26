import { useState, useEffect } from 'react'
import { getApiData } from '../service/APIService'
import { APIResponse, Location } from '../d'

export function useLocations () {
  const [locations, setLocations] = useState<Location[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [pag, setPag] = useState(1)
  const [currentLocation, setCurrentLocation] = useState(0)

  useEffect(() => {
    getLocations() // Cargar personajes cuando el componente se monta
  }, [])

  async function getLocations () {
    try {
      setLoading(true)
      const data: APIResponse = await getApiData({ url: `https://rickandmortyapi.com/api/location/?page=${pag}` })
      setLocations((prevLocations) => {
        // Filtrar los personajes nuevos para evitar duplicados
        const newCharacters = data.results.filter((newCharacter) => {
          return !prevLocations.some((prevLocations) => prevLocations.id === newCharacter.id)
        })
        // Concatenar los personajes filtrados al arreglo existente
        return prevLocations.concat(newCharacters as Location[])
      })

      setLoading(false)
      setPag(pag + 1)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }

  async function handleNextLocation () {
    if (currentLocation === locations.length - 3) {
      await getLocations()
    }
    setCurrentLocation((prevLocations) => (prevLocations + 1) % locations.length)
  }

  async function handlePrevLocation () {
    if (currentLocation === 0) {
      await getLocations()
    }
    setCurrentLocation((prevLocations) => (prevLocations - 1 + locations.length) % locations.length)
  }

  return { locations, loading, error, handleNextLocation, handlePrevLocation, currentLocation }
}
