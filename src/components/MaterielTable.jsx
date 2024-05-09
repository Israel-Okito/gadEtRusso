import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from '../../sanity/lib/image'
   
export const MaterielTable = ({fetchmateriel}) => {
  return (
    <Table>
      <TableCaption>la liste de tout les matériels disponibles </TableCaption>
      <TableHeader>
        <TableRow className=" hover:bg-slate-950">
          <TableHead className="w-[550px] border-r border-white">Numero d&apos;enregistrement matériel</TableHead>
          <TableHead className="border-r border-white">Nom</TableHead>
          <TableHead className="text-right border-r border-white">Nom du fournisseur</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {fetchmateriel.map((tech) => (
        //    <Link href={`/materiel/${tech._id}`} key={tech._id} >
          <TableRow key={tech._id} className=" hover:bg-slate-950">
            <TableCell className="font-medium text-white flex justify-between items-center border-r border-white"  >{tech._id}
              <Image
               src={urlForImage(tech.image).url()}
               alt='image'
               width={60}
               height={60}
               priority
              />
            </TableCell>
            <TableCell className="border-r border-white text-white">{tech.nom}</TableCell>
            <TableCell className="text-right border-r border-white text-white">{tech.fournisseur}</TableCell>
              <Link href={`/materiel/${tech.slug.current}`} className='bg-blue-900 font-bold  mx-1 py-2   text-center ' >
               <TableCell  >
                  Voir plus
                 </TableCell>  
              </Link>             
          </TableRow>
        //    </Link>
        ))}
      </TableBody>
    </Table>
  
  )
}
