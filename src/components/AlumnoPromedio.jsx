import * as React from 'react';
import { ContenedorAprobado } from './alumnosprom/contenedorAprobado';
import { ContenedorReprobado } from './alumnosprom/contenedorReprobado';

export const AlumnoPromedio = () => {

    const materia = 9;
    const materia1 = 9;
    const resultado = (materia + materia1) / 2

    if (resultado > 8) {

        return (
            <ContenedorAprobado/>
        )

    } else {

        return (
            <ContenedorReprobado/>
        );

    }


}
