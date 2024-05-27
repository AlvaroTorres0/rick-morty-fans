interface FetchParams {
    url: string;
}

interface FavoriteParams {
  favoritesList: string;
  type: 'character' | 'location';
}

export async function getApiData ({ url }: FetchParams) {
  const response = await fetch(url)
  const data = await response.json()
  if (data.error) {
    throw new Error('Error fetching data from API')
  }
  return data
}

export async function getFavorites ({ favoritesList, type }: FavoriteParams) {
  const response = await fetch(`https://rickandmortyapi.com/api/${type}/${favoritesList}`)
  const data = await response.json()
  if (data.error) {
    throw new Error('Error fetching favorite characters')
  }
  return data
}
