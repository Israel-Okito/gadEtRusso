
const marque ={
  name: "marque",
  title: "Marque",
  type: "document",
  fields: [
    {
      name: "nom",
      title: "Nom",
      type: "string",
    },
 
    {
      name: 'materiel',
      title: 'Matériel',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'materiel' }] }],
    },
  

  ],
};

export default marque
