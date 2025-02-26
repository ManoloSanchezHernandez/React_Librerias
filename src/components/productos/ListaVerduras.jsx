import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select/SelectInput';
import ListaProductoDialogo from './ListaProductoDialogo';

export default function ListaVerduras() {

    const data = {
        "store": {
            "book": [
                {
                    "category": "reference",
                    "author": "Nigel Rees",
                    "title": "Sayings of the Century",
                    "price": 8.95,
                    "instock": true,
                    "sold": true
                },
                {
                    "category": "fiction",
                    "author": "Evelyn Waugh",
                    "title": "Sword of Honour",
                    "price": 12.99,
                    "instock": false,
                    "sold": true
                },
                {
                    "category": "fiction",
                    "author": "Herman Melville",
                    "title": "Moby Dick",
                    "isbn": "0-553-21311-3",
                    "price": 8.99,
                    "instock": true,
                    "sold": false
                },
                {
                    "category": "fiction",
                    "author": "J. R. R. Tolkien",
                    "title": "The Lord of the Rings",
                    "isbn": "0-395-19395-8",
                    "price": 22.99,
                    "instock": false,
                    "sold": false
                }
            ],
            "bicycle": {
                "color": "red",
                "price": 19.95,
                "instock": true,
                "sold": false
            }
        }
    }

    const verduras = [
        { id: '1', nombre: 'lechuga', descripcion: 'Verdura romanita 100% frescas para tus tortas dela chavo', precio: 23, Cantidad: 12 },
        { id: '2', nombre: 'tomate', descripcion: 'Verdura romanita 100% frescas para tus tortas dela chavo', precio: 34, Cantidad: 10 },
        { id: '3', nombre: 'papa', descripcion: 'Verdura romanita 100% frescas para tus tortas dela chavo', precio: 13, Cantidad: 1 },
        { id: '4', nombre: 'zanahoria', descripcion: 'Verdura romanita 100% frescas para tus tortas dela chavo', precio: 10, Cantidad: 5 },
        { id: '5', nombre: 'cebolla', descripcion: 'Verdura romanita 100% frescas para tus tortas dela chavo', precio: 36, Cantidad: 1 },
        { id: '6', nombre: 'espinaca', descripcion: 'Verdura romanita 100% frescas para tus tortas dela chavo', precio: 19, Cantidad: 200 },
        { id: '7', nombre: 'pepino', descripcion: 'Verdura romanita 100% frescas para tus tortas dela chavo', precio: 23, Cantidad: 12 },
    ];

    const [selectedVerdura, setSelectedVerdura] = useState('');

    const handleChange = (event) => {
        setSelectedVerdura(event.target.value);
    };

    console.log('Objeto verdura:', verduras);
    console.log('Total de datos array es:', verduras.length);
    console.log('El valor seleccionado es:', selectedVerdura);

    if (verduras.length === 0) {
        console.log('No hay datos en el array');
        return <h3>No hay datos en el array</h3>;
    }

    return (
        <div style={{ padding: '50px' }}>
            <h2>Hola, soy la lista de verduras</h2>
            <h3>Lista de verduras</h3>

            {/* Lista de verduras */}
            <ul>
                {verduras.map((verdura) => (
                    <li key={verdura.id}>
                        {verdura.id}. {verdura.nombre} | {verdura.descripcion}
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => alert(`Stock: ${verdura.Cantidad}`)}
                        >
                            Ver Stock
                        </Button>
                    </li>
                ))}
            </ul>

            <Divider color="primary"/>

            {/* Tabla de verduras */}
            <h2>
                Tabla de verduras
            </h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {verduras.map((verdura) => (
                        <tr key={verdura.id}>
                            <td>{verdura.id}</td>
                            <td>{verdura.nombre}</td>
                            <td>{verdura.descripcion}</td>
                            <td>{verdura.precio}</td>
                            <td>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => alert(`Stock: ${verdura.Cantidad}`)}
                                >
                                    Ver Stock
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                    <br />
            <Divider color="primary"/>

            {/* Selector de verduras */}
            <h2>Selector de Verduras</h2>
            
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    
                    <InputLabel id="verdura-select-label">Verdura</InputLabel>
                    <Select
                        labelId="verdura-select-label"
                        id="verdura-select"
                        value={selectedVerdura}
                        label="Verdura"
                        onChange={handleChange}
                    >
                        {verduras.map((verdura) => (
                            <MenuItem key={verdura.id} value={verdura.id}>{verdura.nombre}</MenuItem>
                            
                        ))}
                    </Select>
                </FormControl>
                
            </Box>
            <br />
            <Divider color="primary"/>
            <ListaProductoDialogo 
            data={data.store}

            />
        </div>
    );
}
