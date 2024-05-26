import React from 'react'
import { Character } from '../d'

const Card: React.FC<Character> = ({ id, name, status, species, image, origin }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl flex gap-4">
        <figure><img src={image} className='rounded-3xl' alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title font-principal-bold text-4xl">{ name }</h2>
            <div className='flex flex-col'>
              <span className='font-principal-thin text-2xl'>Estatus</span>
              <div className='flex gap-4'>
                {
                  status === 'Alive'
                    ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M22.175 10.525q.275.3.275.713t-.275.712l-3.55 3.525q-.275.3-.7.3t-.7-.3l-1.425-1.4q-.3-.3-.3-.712t.3-.713q.3-.275.713-.275t.712.275l.7.7l2.825-2.825q.3-.275.712-.275t.713.275m-11.85 9.9l-2.5-2.275q-1.8-1.625-3.087-2.9t-2.125-2.4t-1.225-2.175T1 8.475q0-2.35 1.575-3.912T6.5 3q1.3 0 2.475.538T11 5.075q.85-1 2.025-1.537T15.5 3q2.125 0 3.563 1.288T20.85 7.3q-.5-.2-1.05-.25T18.675 7q-2.125 0-3.9 1.713T13 13q0 1.2.525 2.438T15 17.45q-.475.425-1.237 1.088T12.45 19.7l-.8.725q-.275.25-.663.25t-.662-.25"/></svg>
                      )
                    : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M10.5 15.75h3l-1.5-3zM8.5 13q.825 0 1.413-.587T10.5 11t-.587-1.412T8.5 9t-1.412.588T6.5 11t.588 1.413T8.5 13m7 0q.825 0 1.413-.587T17.5 11t-.587-1.412T15.5 9t-1.412.588T13.5 11t.588 1.413T15.5 13M6 22v-4.25q-.975-.425-1.713-1.137T3.037 15t-.775-1.925T2 11q0-3.95 2.8-6.475T12 2t7.2 2.525T22 11q0 1.05-.262 2.075T20.963 15t-1.25 1.613T18 17.75V22h-3v-2h-2v2h-2v-2H9v2z"/></svg>
                      )
                }

                <span>{ status }</span>
              </div>
            </div>

            <div className='flex flex-col'>
              <span className='font-principal-thin text-2xl'>Especie</span>
              <div className='flex gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="#ffffff" d="M204 204.5V232a12 12 0 0 1-24 0v-27.5a59.68 59.68 0 0 0-33.17-53.67l-48.4-24.2A83.54 83.54 0 0 1 52 51.5V24a12 12 0 0 1 24 0v27.5a59.68 59.68 0 0 0 33.17 53.67l48.4 24.2A83.54 83.54 0 0 1 204 204.5m-52-.5H76a59.8 59.8 0 0 1 2.34-16h56.2a12 12 0 0 0 0-24H91.76c1-1.1 2-2.18 3.13-3.21a12 12 0 0 0-16.45-17.48A84.38 84.38 0 0 0 52 204.5V232a12 12 0 0 0 24 0v-4h76a12 12 0 0 0 0-24m40-192a12 12 0 0 0-12 12v4h-76a12 12 0 0 0 0 24h76a59.8 59.8 0 0 1-2.34 16h-56.22a12 12 0 0 0 0 24h42.8c-1 1.1-2 2.18-3.13 3.21a12 12 0 0 0 16.45 17.48A84.38 84.38 0 0 0 204 51.5V24a12 12 0 0 0-12-12"/></svg>
                <span>{ species }</span>
              </div>
            </div>

            <div className='flex flex-col'>
              <span className='font-principal-thin text-2xl'>Origin</span>
              <div className='flex gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="#ffffff" d="M245.11 60.68c-7.65-13.19-27.85-16.16-58.5-8.66a96 96 0 0 0-153.8 88.28C5.09 169 5.49 186 10.9 195.32C16 204.16 26.64 208 40.64 208a124 124 0 0 0 28.79-4a96 96 0 0 0 153.78-88.25c12.51-13 20.83-25.35 23.66-35.92c1.96-7.32 1.37-13.76-1.76-19.15m-13.69 15c-6.11 22.78-48.65 57.31-87.52 79.64c-67.81 39-113.62 41.52-119.16 32c-1.46-2.51-.65-7.24 2.22-13a80 80 0 0 1 10.28-15.05a95.5 95.5 0 0 0 6.23 14.18a4 4 0 0 0 4 2.12a122 122 0 0 0 16.95-3.32c21.23-5.55 46.63-16.48 71.52-30.78s47-30.66 62.45-46.15a123 123 0 0 0 11.31-12.87a4 4 0 0 0 .17-4.52a96 96 0 0 0-9.1-12.46c14.21-2.35 27.37-2.17 30.5 3.24c.92 1.57.97 3.92.15 6.98Z"/></svg>
                <span>{ origin.name }</span>
              </div>
            </div>

            <div className="card-actions mt-4">
                <button className="btn" onClick={() => console.log(id)}>Agregar a favorito <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7zm0-2.7q2.4-2.15 3.95-3.687t2.45-2.675t1.25-2.026T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662T12.95 7h-1.9q-.375-1.025-1.375-1.687T7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 .875.35 1.763t1.25 2.025t2.45 2.675T12 18.3m0-6.825"/></svg></button>
            </div>
        </div>
    </div>
  )
}

export default Card
