import React from 'react';
import Grid from '@mui/material/Grid2';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NewContenidoComida from './NewContenidoComida';
import { useEffect } from 'react';

export default function NewHome() {
    const [textoBuscar, setTextoBuscar] = React.useState('');
    const [datos, setDatos] = React.useState({ meals: [] });

    console.log("Contenido input:", textoBuscar);

    const obtenerComidaPorNombre = async () => {
        const buscar = textoBuscar.trim();
        if (buscar === "") {
            alert("Por favor, introduce un nombre de comida básico");
        } else {

            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${buscar}`, requestOptions);
                const result = await response.json();
                setDatos(result); // Actualiza el estado con los datos de la API
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Evita el comportamiento por defecto del formulario
            obtenerComidaPorNombre(); // Llama a la función de búsqueda
        }
    };

React.useEffect(() => {
    const obtenerdata = async () => {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=beef`, requestOptions);
                const result = await response.json();
                setDatos(result); // Actualiza el estado con los datos de la API
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        
    };
    obtenerdata()
  
  }, []); // Se ejecuta al montar el componente y cada vez que se cambia el textoBuscar


    return (
        <>
            <h1 style={{ textAlign: 'center', color: "purple" }}>Encuentra tu Platillo Favorito</h1>
            <Grid container justifyContent="center" alignItems="center" sx={{ marginTop: '20px', display: 'flex' }} spacing={2}>
                <Grid xs={12} md={12} display="flex" justifyContent="center">
                    <Paper
                        component="form"
                        onSubmit={(e) => e.preventDefault()} // Evita el comportamiento por defecto del formulario
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px 20px',
                            borderRadius: '30px',
                            boxShadow: 3,
                            width: '90vw',
                            maxWidth: '1200px',
                        }}
                    >
                        <InputBase
                            sx={{ ml: 2, flex: 1, fontSize: '18px' }}
                            placeholder="Buscar comida..."
                            value={textoBuscar}
                            onChange={e => setTextoBuscar(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                        <IconButton
                            onClick={obtenerComidaPorNombre}
                            sx={{ p: '12px' }}
                            color="primary"
                        >
                            <SearchIcon sx={{ fontSize: '30px' }} />
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>

            <NewContenidoComida data={datos.meals} />
        </>
    );
}