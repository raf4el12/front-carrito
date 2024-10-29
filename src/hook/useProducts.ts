import { useQuery } from '@tanstack/react-query';

export const useProduct = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch('http://localhost:8000/api/products');
      if (!response.ok) throw new Error('Error de carga de productos!');
      return response.json();
    }
  });
};
