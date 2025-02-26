import React, { useState } from "react";
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListaVerduras from "../productos/ListaVerduras";

const   ListaProducto = () => {
    const [home, setHome] = useState(false);

    const changeState = () => {
        setHome(!home);
    };

    console.log('Tu switch está:', home);

    return (
        <div style={{ padding: '50px' }}>
            <Switch
                checked={home}
                onChange={changeState}
                inputProps={{ "aria-label": '' }}
            />

            <Typography 
                variant={home ? "h1" : "h3"} 
                color={home ? "success" : "error"} // Usa "primary" o "secondary" en lugar de "success"
            >
            LUZ CUARTO
            </Typography>
            
            <Divider color="primary" /> {}

            <ListaVerduras/>
        </div>
    );
};

export default ListaProducto;