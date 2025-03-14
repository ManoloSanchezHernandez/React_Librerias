import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function PageAbout() {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                Acerca de Nosotros
            </Typography>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Card sx={{ maxWidth: 600, margin: 'auto' }}>
                        <CardMedia
                            component="img"
                            height="400"
                            image="https://media.istockphoto.com/id/1415136911/es/foto/mapa-del-mundo-hecho-de-diferentes-granos-y-semillas-de-colores.jpg?s=612x612&w=0&k=20&c=EVFyDypc-rTe0C8Ycom8e7CEXNvIA_cr4ubdYljv5q0="
                            alt="Mapa del mundo hecho de granos y semillas"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ maxWidth: 600, margin: 'auto' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                                Bienvenido a Nuestro Sitio
                            </Typography>
                            <Typography variant="body1" paragraph>
                                En nuestro sitio, encontrarás la mayor colección de recetas de todo el mundo. Nos enorgullece ofrecer información de alta calidad para ayudarte a explorar el fascinante mundo de la gastronomía.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Nuestro fundador, Juan Manuel Sánchez Hernández, ha dedicado mucho esfuerzo y pasión para crear esta plataforma. Estamos comprometidos a brindarte contenido actualizado y relevante para que disfrutes al máximo de tu experiencia culinaria.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                ¡Mantente al tanto de nuestras actualizaciones y descubre nuevas recetas, técnicas y secretos culinarios!
                            </Typography>
                            <Button variant="contained" color="primary" sx={{ mt: 2 }}
                                component={Link} to="/recetas">
                                Explora Nuestras Recetas
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default PageAbout;