import React from 'react'
import Card from '../../components/Card'

const Inicio: React.FC = () => {
  return (
        <section className='flex flex-col gap-8'>
          <h2 className='font-principal-black primary-text-color text-4xl'>Todos los personajes</h2>
          <Card />
        </section>
  )
}

export default Inicio
