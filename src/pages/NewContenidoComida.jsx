import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NewContenidoComida(props) {
    console.log('Datos desde padre: ', props.data);

    return (
        <div>
            {
                !props.data || props.data.length === 0 ? (
                    <Typography variant="h4" color="initial">No hay datos para mostrar</Typography>
                ) : (
                    <Grid container padding={6} spacing={4}>
                        {props.data.map((recetadata, index) => (
                            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        padding: '10px',
                                        borderRadius: '12px',
                                        textAlign: 'center',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    {/* Nombre de la comida */}
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
                                        {recetadata.strMeal}
                                    </Typography>

                                    {/* Imagen de la comida */}
                                    <img
                                        src={recetadata.strMealThumb}
                                        alt={recetadata.strMeal}
                                        style={{
                                            maxWidth: '100%',
                                            borderRadius: '8px',
                                            marginBottom: '12px',
                                        }}
                                    />

                                    {/* ID de la comida */}
                                    <Paper
                                        sx={{
                                            width: '70%',
                                            borderRadius: '8px',
                                            fontWeight: 'bold',
                                            alignSelf: 'center',
                                            marginBottom: '10px'
                                        }}
                                    >
                                        ID: {recetadata.idMeal}
                                    </Paper>

                                    {/* Botón de YouTube */}
                                    {recetadata.strYoutube && (
                                        <Button
                                            href={recetadata.strYoutube}
                                            target="_blank"
                                            variant="contained"
                                            color="error"
                                            sx={{
                                                width: '70%',
                                                borderRadius: '8px',
                                                fontWeight: 'bold',
                                                alignSelf: 'center'
                                            }}
                                        >
                                            Ver en YouTube
                                        </Button>
                                    )}

                                    {/* Botón para abrir la página de detalles */}
                                    <Button
                                        component={Link}
                                        to={`/recetas/${recetadata.idMeal}`}  // Ruta corregida
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            width: '70%',
                                            marginTop: '8px',
                                            borderRadius: '8px',
                                            fontWeight: 'bold',
                                            alignSelf: 'center',
                                            marginBottom: '10px'
                                        }}
                                    >
                                        Ver Detalles
                                    </Button>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                )
            }
        </div>
    );
}
