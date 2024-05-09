
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
import Image from 'next/image'
   
import { client } from '../../../../sanity/lib/client';
import { groq } from 'next-sanity'
import { urlForImage } from '../../../../sanity/lib/image';



const page = async () => {

    const fetchtechnicien = await client.fetch(
      groq`*[_type == 'technicien']{
        ...,

       } | order(_createdAt asc)`
    );

  return (
    <div className='max-w-5xl mx-auto mt-10'>
    <h1 className="text-3xl text-center font-semibold text-white mb-20">Nos techniciens</h1>

    <Table>
      <TableCaption>la liste de tout les techniciens</TableCaption>
      <TableHeader>
        <TableRow className=" hover:bg-slate-950">
          <TableHead className="border-r border-white">Nom</TableHead>
          <TableHead className="text-right border-r border-white">Prenom</TableHead>
          <TableHead className="text-right border-r border-white">Email</TableHead>
          <TableHead className="text-right">Numéro</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {fetchtechnicien.map((tech) => (
        //    <Link href={`/materiel/${tech._id}`} key={tech._id} >
          <TableRow key={tech._id} className=" hover:bg-slate-950">
            <TableCell className="font-medium text-white flex justify-between items-center border-r border-white"   >
              <Image
               src={urlForImage(tech.image).url()}
               alt='image'
               width={60}
               height={60}
               priority
               className='rounded-full'
              />
              {tech.nom}
            </TableCell>
            <TableCell className="text-right border-r border-white">{tech.prenom}</TableCell>
            <TableCell className="text-right border-r border-white">{tech.email}</TableCell>
            <TableCell className="text-right">{tech.numero}</TableCell>
                   
          </TableRow>
        //    </Link>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}

export default page