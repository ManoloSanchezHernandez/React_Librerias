import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';


export default function MiProyecto1() {
    const data = {
        "store": {
            "book": [
                { "category": "reference", "author": "Nigel Rees", "title": "Sayings of the Century", "price": 8.95, "in-stock": true, "sold": true },
                { "category": "fiction", "author": "Evelyn Waugh", "title": "Sword of Honour", "price": 12.99, "in-stock": false, "sold": true },
                { "category": "fiction", "author": "Herman Melville", "title": "Moby Dick", "isbn": "0-553-21311-3", "price": 8.99, "in-stock": true, "sold": false },
                { "category": "fiction", "author": "J. R. R. Tolkien", "title": "The Lord of the Rings", "isbn": "0-395-19395-8", "price": 22.99, "in-stock": false, "sold": false }
            ],
            "bicycle": [
                { "color": "red", "price": 19.95, "in-stock": true, "sold": false },
                { "color": "blue", "price": 25.00, "in-stock": true, "sold": false },
                { "color": "green", "price": 20.00, "in-stock": true, "sold": false },
            ]
        }
    };

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    return (
        <div style={{ padding: '50px'}}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Typography variant="h3">
                    Bienvenido <br /> <br />
                </Typography>
                <TextField
                    label="Escribe tu nombre"
                    variant="outlined" 
                    size="medium"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && e.target.value.trim() !== '') {
                            alert(`Bienvenido, ${e.target.value}!`);
                        }
                    }}
                />
            </div>
            <Typography variant="h4" gutterBottom>
                Selecciona una categoría <br />
            </Typography>

            {/* Botones para seleccionar categoría */}
            <Button
                variant="contained"
                color="primary"
                style={{ marginRight: '10px' }}
                onClick={() => { setCategoriaSeleccionada('book'); setProductoSeleccionado(null); }}
            >
                Books
            </Button>

            <Button
                variant="contained"
                color="secondary"
                onClick={() => { setCategoriaSeleccionada('bicycle'); setProductoSeleccionado(null); }}
            >
                Bicycles
            </Button>

            {/* Lista de productos según la categoría seleccionada */}
            {categoriaSeleccionada && (
                <div style={{ marginTop: '20px' }}>
                    <Typography variant="h5" gutterBottom>
                        {categoriaSeleccionada === 'book' ? 'Lista de Libros' : 'Lista de Bicicletas'}
                    </Typography>
                    <ul>
                        {data.store[categoriaSeleccionada].map((producto, index) => (
                            <li key={index}>
                                <Button
                                    variant="text"
                                    color="primary"
                                    onClick={() => setProductoSeleccionado(producto)}
                                >
                                    {categoriaSeleccionada === 'book' ? producto.title : `Bicicleta - ${producto.color}`}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Tabla con detalles del producto seleccionado */}
            {productoSeleccionado && (
                <TableContainer component={Paper} sx={{ margin: '20px', padding: '10px' }}>
                    <Table aria-label="Detalles del producto">
                        <TableHead>
                            <TableRow>
                                <TableCell>Propiedad</TableCell>
                                <TableCell>Valor</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.entries(productoSeleccionado).map(([key, value], index) => (
                                <TableRow key={index}>
                                    <TableCell>{key}</TableCell>
                                    <TableCell>{typeof value === 'boolean' ? (value ? 'Sí' : 'No') : value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
}
