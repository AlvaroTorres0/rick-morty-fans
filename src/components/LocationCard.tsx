import React from 'react'
import { Location } from '../d'

const LocationCard: React.FC<Location> = ({ id, name, type, dimension }) => {
  return (
    <div id={`${id}`} className="card w-96 lg:w-[500px] bg-base-100 shadow-xl">
        <div className="card-body flex flex-col gap-2">
            <h2 className="card-title font-principal-bold text-4xl">{ name }</h2>
            <div className='flex gap-12'>
                <div className='flex flex-col'>
                    <span className='font-principal-thin text-2xl'>Tipo</span>
                    <div className='flex gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="#ffffff" d="M245.11 60.68c-7.65-13.19-27.85-16.16-58.5-8.66a96 96 0 0 0-153.8 88.28C5.09 169 5.49 186 10.9 195.32C16 204.16 26.64 208 40.64 208a124 124 0 0 0 28.79-4a96 96 0 0 0 153.78-88.25c12.51-13 20.83-25.35 23.66-35.92c1.96-7.32 1.37-13.76-1.76-19.15m-13.69 15c-6.11 22.78-48.65 57.31-87.52 79.64c-67.81 39-113.62 41.52-119.16 32c-1.46-2.51-.65-7.24 2.22-13a80 80 0 0 1 10.28-15.05a95.5 95.5 0 0 0 6.23 14.18a4 4 0 0 0 4 2.12a122 122 0 0 0 16.95-3.32c21.23-5.55 46.63-16.48 71.52-30.78s47-30.66 62.45-46.15a123 123 0 0 0 11.31-12.87a4 4 0 0 0 .17-4.52a96 96 0 0 0-9.1-12.46c14.21-2.35 27.37-2.17 30.5 3.24c.92 1.57.97 3.92.15 6.98Z"/></svg>
                        <span>{ type }</span>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <span className='font-principal-thin text-2xl'>Dimensión</span>
                    <div className='flex gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-3 -3 24 24"><path fill="#ffffff" d="M.694 17.306c-1.91-1.912.258-7.18 4.845-11.767S15.394-1.217 17.306.694c1.91 1.912-.258 7.18-4.845 11.767S2.606 19.217.694 17.306M2.08 15.92c.815.816 5.102-.95 8.997-4.845c3.895-3.895 5.66-8.182 4.845-8.997c-.815-.816-5.102.95-8.997 4.845c-3.895 3.895-5.66 8.182-4.845 8.997m3.46-3.46C.952 7.874-1.217 2.606.694.694c1.912-1.91 7.18.258 11.767 4.845s6.756 9.855 4.845 11.767c-1.912 1.91-7.18-.258-11.767-4.845zm1.385-1.385c3.895 3.895 8.182 5.66 8.997 4.845c.816-.815-.95-5.102-4.845-8.997c-3.895-3.895-8.182-5.66-8.997-4.845c-.816.815.95 5.102 4.845 8.997M9 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4"/></svg>
                        <span>{ dimension }</span>
                    </div>
                </div>
            </div>
            <div className="card-actions justify-center mt-6">
                <button className="btn" onClick={() => console.log(id)}>Añadir a favoritos <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7zm0-2.7q2.4-2.15 3.95-3.687t2.45-2.675t1.25-2.026T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662T12.95 7h-1.9q-.375-1.025-1.375-1.687T7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 .875.35 1.763t1.25 2.025t2.45 2.675T12 18.3m0-6.825"/></svg></button>
            </div>
        </div>
    </div>
  )
}

export default LocationCard
