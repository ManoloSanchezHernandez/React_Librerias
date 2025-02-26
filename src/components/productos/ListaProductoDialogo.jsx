import React from 'react'
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import MiDialogo from './MiDialogo'

export default function ListaProductoDialogo(props) {

    const data = props.data
    console.log(data)

    return (
        <div>
            <h2>Consumo de Jason</h2>

            <Grid container spacing={1}>
                <Grid size={{ sm: 12, md: 6 }} style={{ paddingBottom: 15 }}>
                    <Card variant='outlined'>
                        <Typography variant='h4'>Bicicleta en promo</Typography>
                        <Typography variant='h5'>Precio mas bajo: {data.bicycle.price}</Typography>
                        <Typography variant='h5'>Stock: {data.bicycle.instock ? "Disponible" : "No disponible"}</Typography>
                        <Typography variant='h5'>Color: {data.bicycle.color}</Typography>
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                {data.book.map((libro, index) => (
                    <Grid size={{ sm: 12, md: 6 }} style={{ padding: 5 }} key={index}>
                        <Card variant='outlined'>
                            <Typography variant='h4'>LIBRO</Typography>
                            <Typography variant='h5'>Titulo: {libro.title}</Typography>
                            <Typography variant='h5'>Autor: {libro.author}</Typography>
                            <Typography variant='h5'>Categoria: {libro.category}</Typography>
                            <MiDialogo
                            datos={libro}
                            />
                            
                        </Card>
                    </Grid>
                ))}
            </Grid>



        </div>
    )
}

