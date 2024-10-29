import { Card, CardContent, Typography } from '@mui/material';
import { Order } from '../../types/order';

type OrderCardProps = {
  item: Order;
};

const OrderCard = ({ item }: OrderCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Cliente: {item.customerName}</Typography>
        <Typography variant="body2">Fecha: {item.date}</Typography>
        <Typography variant="body1">Total: ${item.totalAmount}</Typography>
        <Typography variant="body2">Estado: {item.status}</Typography>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
