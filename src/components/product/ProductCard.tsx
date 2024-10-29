import { Card, CardContent, Typography } from '@mui/material';
import { Product } from '../../types/products';


type ProductCardProps = {
  item: Product;
};

const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="body2">{item.description}</Typography>
        <Typography variant="body1">${item.price}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
