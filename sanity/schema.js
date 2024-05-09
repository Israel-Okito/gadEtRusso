import category from "./schemas/category";
import marque from "./schemas/marque";
import materiel from "./schemas/materiel";
import technicien from "./schemas/technicien";

export const schema = {
  types: [technicien,materiel, category, marque],
}
