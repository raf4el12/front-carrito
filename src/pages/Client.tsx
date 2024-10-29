import { Box, LinearProgress, Typography } from '@mui/material'
import Layout from '../components/Layout'
import ClientCard from '../components/client/ClientCard'
import { useClient } from '../hook/useClient'

const Client = () => {
  const { isPending, ...clients } = useClient()

  if (isPending) return (
    <Layout>
       <LinearProgress />
    </Layout>
  )

  return (
    <Layout>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 1
      }}>
        {
          !clients?.data?.data && (
            <Typography>No hay clientes</Typography>
          )
        }
        {
          clients?.data?.data && clients.data.data.map((item, index) => (
            <ClientCard
              key={`client-card-${index}`}
              item={item} />
          ))
        }
      </Box>
    </Layout>
  )
}

export default Client