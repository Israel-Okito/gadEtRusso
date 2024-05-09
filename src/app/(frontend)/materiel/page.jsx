import Link from 'next/link';
import React from 'react'
import { client } from '../../../../sanity/lib/client';
import { groq } from 'next-sanity';
import { MaterielFilters } from '@/components/Materiel-filters';
import { MaterielTable } from '@/components/MaterielTable';



export const revalidate = 10;

const page = async ({searchParams}) => {

   
const { date, category, marque, search } = searchParams
const dateOrder = date ? `| order(_createdAt ${searchParams.date})` : ""
const ProductFilter = `_type == "materiel"`
const CategoryFilter = category ? `&& "${category}" in category[]->nom` : ""
const MarqueFilter = marque ? ` &&  "${marque}" in marque[]->nom` : ""
const order = `${dateOrder}`

const filter = `*[${ProductFilter}${CategoryFilter}${MarqueFilter}]`
// console.log(filter)
  const fetchmateriel = await client.fetch(
    groq`${filter} ${order}{
     ...,
     marque[]-> {
      title
     },
    }`

  )

  const categories = await client.fetch(
    groq `*[_type == 'category'] {
      _id,
      nom,
    } 
    `
  )

  const marques = await client.fetch(
    groq `*[_type == 'marque'] {
      _id,
      nom,
    } 
    `
  )
  return (
   <div className="grid grid-cols-12 max-md:relative bg-black    h-screen max-h-screen">
    {/* j'ai utiliser le shadcn ui sheet pour faire le sidebar responsive */}
       <div  className="h-screen max-h-screen bg-white/90  border-r-slate-800  border-r-[1px] col-span-2 z-10  max-md:hidden " >
      
         <MaterielFilters category={categories} marque={marques} />
      </div>
 
      <div className="col-span-10 bg-black text-white  max-md:col-span-12 overflow-y-auto max-w-5xl mx-auto mt-10">
           
            <h1 className="text-3xl text-center font-semibold text-white mb-6">Nos matériel</h1>
        
       <MaterielTable fetchmateriel={fetchmateriel}/>
         
     </div>
 </div>
   
  )
}

export default page