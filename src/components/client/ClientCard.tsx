import { FC } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { Client } from '../../types/client'

interface ClientCardProps {
  item: Client
}

const ClientCard: FC<ClientCardProps> = ({ item }) => {
  return (
    <Card
      sx={{ minWidth: 275 }}
      variant='outlined'>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {item.email}
        </Typography>
        <Typography variant="h5" component="div">
          {`${item.name} ${item.lastName}`}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ClientCard