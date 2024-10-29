import { useQuery } from '@tanstack/react-query';
import { Order } from '../types/order';

export const useOrder = () => {
  const dataQuery = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const response = await fetch('http://localhost:8000/api/orders');
      if (!response.ok) {
        throw new Error('Error fetching orders');
      }
      const data = await response.json();
      return data as Order[]; 
    }
  });

  return dataQuery;
};
