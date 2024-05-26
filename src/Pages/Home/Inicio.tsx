import React from 'react'
import Card from '../../components/Card'
import { useCharacters } from '../../hooks/useCharacters'

const Inicio: React.FC = () => {
  const { characters, loading, error, handleNextCharacter, handlePrevCharacter, currentCharacter } = useCharacters()

  return (
        <section className='flex flex-col gap-8'>
          <h2 className='font-principal-black primary-text-color text-4xl'>Todos los personajes</h2>
          <div className="carousel w-full flex">
            <div id={'slide1'} className="carousel-item relative">
                {
                    characters.length > 0
                      ? <>
                          <Card
                            id={characters[currentCharacter].id}
                            name={characters[currentCharacter].name}
                            status={characters[currentCharacter].status}
                            species={characters[currentCharacter].species}
                            image={characters[currentCharacter].image}
                            origin={characters[currentCharacter].origin}
                          />
                          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
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
  )
}

export default Inicio
