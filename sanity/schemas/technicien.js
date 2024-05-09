import { client } from "../lib/client";

const technicien = {

  name: "technicien",
  title: "Techniciens",
  type: "document",
  fields: [

    {
      name: "nom",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "prenom",
      title: "Prenom",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) =>
        Rule.required().email({ message: "Doit être une adresse e-mail valide" }),
    },
 
    // {
    //   name: 'email',
    //   title: 'Email',
    //   type: 'string',
    //   validation: Rule => Rule.required().email({ message: 'Doit être une adresse e-mail valide' }).custom(async email => {
    //     // Votre logique de validation d'unicité ici
    //     const existingEmail = await client.fetch('*[_type == "technicien" && email == $email]', { email });
    //     if (existingEmail.length > 0) {
    //       return 'Cette adresse e-mail est déjà utilisée';
    //     }
    //     return true; // L'adresse e-mail est unique
    //   })
    // },
    
    
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Allows selecting a hotspot for cropping
      },
      validation: (Rule) => Rule.required(),
    },

    {
      name: "numero",
      title: "Numero",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DDTHH:mm:ssZ",
      },
      readOnly: true,
    },
  ],
  initialValue: {
    createdAt: new Date().toISOString(),
  },
};

export default technicien;
