import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function PageHome() {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center",  
      justifyContent: "center", 
      textAlign: "center",  
      color: "white",
      height: "100vh", 
      backgroundImage: "url('https://loveveg.mx/app/uploads/2023/01/Conten-image_Desayuno-economico-1024x737.jpg')", 
      backgroundSize: "cover", 
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat", 
      position: "relative", 
      opacity: 1.5, 
    }}>

      <div 
        style={{
          display: "flex",  
          flexDirection: "column",  
          alignItems: "center",  
          justifyContent: "center", 
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.78)",
        }}
      >
        <h1 style={{ fontSize: "4rem", fontWeight: "bold", margin: "10px" }}>
          BIENVENIDO
        </h1>
        <h2 style={{ maxWidth: "600px", marginBottom: "40px" }}>
          Bienvenido a esta página donde encontrarás platillos de todo el mundo.
        </h2>

        <Button
          component={Link}
          to="/recetas"
          variant="contained"
          size="large"
          style={{ paddingBottom: "10px" }}
        >
          Ver recetas
        </Button>
      </div>
    </div>
  );
}

export default PageHome;
