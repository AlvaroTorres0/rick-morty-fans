interface FetchParams {
    url: string;
}

export async function getApiData ({ url }: FetchParams) {
  const response = await fetch(url)
  const data = await response.json()
  if (data.error) {
    throw new Error('No se encontraron personajes')
  }
  return data
}
