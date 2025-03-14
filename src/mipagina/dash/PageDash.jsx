import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function PageDash() {
    return (
        <div>
            <h1>Soy dashboard</h1>
            <br />
            <Link to='/dash/23'>Click para mas detalles de Mexico</Link><br />
            <Link to='/dash/43'>Click para mas detalles de USA</Link><br />
            <Link to='/dash/32'>Click para mas detalles de Honduras</Link><br />
            <br />
            <Button LinkComponent={Link} to='/dash/45' variant='contained'>
                Ver mas detalles de Irak
            </Button>
        </div>
    )
}
