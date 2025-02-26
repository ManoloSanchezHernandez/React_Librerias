import * as React from 'react';
import { Typography } from '@mui/material';

export const ContenedorAprobado = (props) => {
  return (
    <div>
      <Typography variant="h1" color="success">
        Aprobado
      </Typography>
      <Typography variant="h5" color="blue">
        Curso: Física
      </Typography>

      <h2>Este es tu promedio final: {props.prome}</h2>
    </div>
  );
};
