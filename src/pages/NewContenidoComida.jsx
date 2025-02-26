import react from "react";
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2';
import { Paper } from "@mui/material";
import { Button} from "@mui/material";


export default function NewContenidoComida(props) {
    console.log('Datos desde padre: ', props.data)

    return (
        <div>
            {
                !props.data || props.data.length === 0 ? (
                    <Typography variant="h4" color="initial">No hay datos para mostrar</Typography>
                ) : (

                    <Grid container padding={6} spacing={4}>
                    {props.data.map((recetadata, index) => (
                        <Grid key={index} item xs={4} sm={6} md={2} lg={3}>
                            <Paper
                                elevation={2} // Sombra
                                sx={{
                                    padding: '10px',
                                    borderRadius: '12px',
                                    textAlign: 'center',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}
                            >
                                {/* Nombre de la comida */}
                                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
                                    {recetadata.strMeal}
                                </Typography>
        
                                {/* Imagen de la comida */}
                                <img
                                    src={recetadata.strMealThumb}
                                    alt={recetadata.strMeal}
                                    style={{
                                        width: '100%',
                                        borderRadius: '8px',
                                        marginBottom: '12px',
                                    }}
                                />
        
                                {/* ID de la comida */}
                                <Typography variant="body3" sx={{ color: 'text.secondary', marginBottom: '12px' }}>
                                    ID: {recetadata.idMeal}
                                </Typography>
        
                                {/* Botón de YouTube */}
                                {recetadata.strYoutube && (
                                    <Button
                                        href={recetadata.strYoutube}
                                        target="_blank"
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            width: '100%',
                                            marginTop: '8px',
                                            borderRadius: '8px',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Ver en YouTube
                                    </Button>
                                )}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                )
            }

        </div>
    )
}