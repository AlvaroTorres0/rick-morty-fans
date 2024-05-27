import React from 'react'
import { useLocations } from '../../hooks/useLocations'
import LocationCard from '../../components/LocationCard'

const Ubicaciones: React.FC = () => {
  const { locations, handleNextLocation, handlePrevLocation, currentLocation } = useLocations()

  return (
        <section className='flex flex-col gap-8'>
          <div>
            <h2 className='font-principal-black primary-text-color text-5xl text-center lg:text-start'>Todas las ubicaciones</h2>
            <p className='font-principal-light text-lg text-center lg:text-start'>Selecciona tus ubicaciones favoritas</p>
          </div>
          <div className="carousel w-full flex justify-center">
            <div id={'slide1'} className="carousel-item relative">
                {
                    locations.length > 0
                      ? <>
                          <LocationCard
                            id={locations[currentLocation].id}
                            name={locations[currentLocation].name}
                            type={locations[currentLocation].type}
                            dimension={locations[currentLocation].dimension}
                            isFavorite={false}
                            onRemove={() => console.log('No se puede remover')}
                          />
                          <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-[50%] lg:top-[50%]">
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
  )
}

export default Ubicaciones
