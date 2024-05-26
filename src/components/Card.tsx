import React from 'react'
import { Character } from '../d'

const Card: React.FC<Character> = ({ id, name, status, species, image, origin }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={image} alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title">{ name } {origin.name}</h2>
            <p>{status} {species}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={() => console.log(id)}>Agregar a favorito</button>
            </div>
        </div>
    </div>
  )
}

export default Card
