
  const materiel = {
      name: "materiel",
      title: "Matériels",
      type: "document",
      fields: [
        {
          name: "nom",
          title: "Nom",
          type: "string",
          validation: (Rule) => Rule.required(),
        },

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
          name: "fournisseur",
          title: "Nom du fournisseur",
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
          {
            name: "category",
            title: "Category",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
            validation: (rule) => rule.required(),
          },
          {
            name: "marque",
            title: "Marque",
            type: "array",
            of: [{ type: "reference", to: { type: "marque" } }],
            validation: (rule) => rule.required(),
          },
      ],
  
      initialValue: {
        createdAt: new Date().toISOString(),
      },
    };
    
    export default materiel;
    