import { Box, LinearProgress, Typography } from '@mui/material';
import Layout from '../components/Layout';
import ProductCard from '../components/product/ProductCard';
import { useProduct } from '../hook/useProducts';
import { Product as ProductType } from '../types/products'; 

const Product = () => {
  const { isLoading, data: products, error } = useProduct();

  if (isLoading) return (
    <Layout>
      <LinearProgress />
    </Layout>
  );

  if (error) return (
    <Layout>
      <Typography>Error al cargar productos</Typography>
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
          !products?.length && (
            <Typography>No encontramos productos disponibles</Typography>
          )
        }
        {
          products?.map((item: ProductType, index: number) => (
            <ProductCard
              key={`product-card-${index}`}
              item={item} />
          ))
        }
      </Box>
    </Layout>
  );
}

export default Product;
