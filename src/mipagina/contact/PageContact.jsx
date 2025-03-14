import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

function PageContact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí puedes agregar la lógica para enviar los datos a un servidor
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 4, width: '100%', height: '100vh' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          <b>Contactanos</b>
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Correo Electrónico"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Contraseña"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Box sx={{ marginTop: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              Enviar
            </Button>
          </Box>
        </form>
      </Box>
      <Box>
        <img src='https://www.sg.edu.mx/hs-fs/hubfs/blog/articulos/Julio/cocina-estados-unidos-gastronomia-practicas.jpg?width=560&height=356&name=cocina-estados-unidos-gastronomia-practicas.jpg'/
        >
      </Box>

    </Container>
  );
}

export default PageContact;