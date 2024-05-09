
const category = {
    name: "category",
    title: "Category",
    type: "document",
    fields: [
      {
        name: "nom",
        title: "nom",
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
  
  export default category;
  