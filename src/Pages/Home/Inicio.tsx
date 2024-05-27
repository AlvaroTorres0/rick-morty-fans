import React from 'react'
import CharacterCard from '../../components/CharacterCard'
import { useCharacters } from '../../hooks/useCharacters'

const Inicio: React.FC = () => {
  const { characters, handleNextCharacter, handlePrevCharacter, currentCharacter } = useCharacters()

  return (
        <section className='flex flex-col gap-8'>
          <div>
            <h2 className='font-principal-black primary-text-color text-5xl mt-10 lg:mt-0 text-center lg:text-start'>Todos los personajes</h2>
            <p className='font-principal-light text-lg text-center lg:text-start'>Selecciona tus favoritos</p>
          </div>
          <div className="carousel w-full flex justify-center">
            <div id={'slide1'} className="carousel-item relative">
                {
                    characters.length > 0
                      ? <>
                          <CharacterCard
                            id={characters[currentCharacter].id}
                            name={characters[currentCharacter].name}
                            status={characters[currentCharacter].status}
                            species={characters[currentCharacter].species}
                            image={characters[currentCharacter].image}
                            origin={characters[currentCharacter].origin}
                            isFavorite={false}
                            onRemove={() => console.log('No se puede remover')}
                          />
                          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-[22%] lg:top-2/4">
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
