"use client"

import { useRouter, useSearchParams } from "next/navigation"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"



export function MaterielFilters({category, marque}) {

  const SearchParams = useSearchParams()
  const router = useRouter()
  const SearchValues = Array.from(SearchParams.entries())


  
  const filters = [
    {
      id: "category",
      name: "Categories",
      options: 
        category?.map((item) => ({
          value: item.nom, 
          label: item.nom, 
      })),
           
    },
    {
      id: "marque",
      name: "Marques",
      options: 
       marque?.map((item) => ({
        value: item.nom, 
        label: item.nom, 
     })),
    },

  ]

  

  return (
    <form className="sticky top-32 pt-32 text-black p-2 " >
      <h3 className="  p-4 ">Filtrer les matériels</h3>

      {filters.map((section, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger>
              <span>
                {section.name} {" "}
                <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
                  {SearchParams.get(section.id)
                    ? `(${SearchParams.get(section.id)})`
                    : ""}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {section.options?.map((option, optionIdx) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={`filter-${section.id}-${optionIdx}`}
                      checked={SearchValues.some(
                        ([key, value]) =>
                          key === section.id && value === option.value
                      )}
                      onClick={(event) => {
                        const params = new URLSearchParams(SearchParams)
                        const checked =
                          event.currentTarget.dataset.state === "checked"
                        checked
                          ? params.delete(section.id)
                          : params.set(section.id, option.value)
                        router.replace(`materiel/?${params.toString()}`)
                      }}
                    />
                    <label
                      htmlFor={`filter-${section.id}-${optionIdx}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </form>
  )
}
