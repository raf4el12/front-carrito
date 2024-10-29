// ../types/products.ts
export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
  };
  
  export type Response = Product[]; // llamamos a nuestra api para que devuelva
                                    // un array de products
  
