import { Box, LinearProgress, Typography } from '@mui/material';
import Layout from '../components/Layout';
import OrderCard from '../components/order/OrderCard';
import { useOrder } from '../hook/useOrder';

const OrderPage = () => {
  const { isLoading, data: orders, error } = useOrder();

  if (isLoading) return (
    <Layout>
      <LinearProgress />
    </Layout>
  );

  if (error) return (
    <Layout>
      <Typography>Error al cargar órdenes</Typography>
    </Layout>
  );

  return (
    <Layout>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 1
      }}>
        {
          !orders?.length && (
            <Typography>No hay órdenes disponibles</Typography>
          )
        }
        {
          orders?.map((item, index) => (
            <OrderCard key={`order-card-${index}`} item={item} />
          ))
        }
      </Box>
    </Layout>
  );
}

export default OrderPage;
