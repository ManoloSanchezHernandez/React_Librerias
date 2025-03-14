import * as React from 'react';
import  ComponenteEncabezado  from './ComponenteEncabezado';
import AppRoutes from './mipagina/AppRoutes';




// import PageAbout from './mipagina/aboutus/PageAboutUs';
// import PageContact from './mipagina/contact/PageContact';
// estos son otros componentes que se han usado, pero que por el momento estan comentados por que no se estan usando 
// import ListaProducto from './components/promedio/ListaProducto';
// import MiProyecto1 from './components/miproyecto/MiProyecto1';
// import NewHome from './pages/NewHome';


export default function App() {
  return (
    <div style={{ backgroundColor: "rgba(255, 220, 168, 0.43)"}}>

      {/* El componente encabezado es como un dashboard, que le da estilo a la pagina, se puede usar en conjunto con cualquiera de los otros elementos, es un elemento importado de la pagina de material ui */}
      <ComponenteEncabezado/>
  
      {/* <MiProyecto1/> */}
      {/* <ListaProducto/> */}
      <AppRoutes/>
      
      
      {/* Este componente es el que activa el uso de la API de busqueda de comida 
      <NewHome/> */}
      {/* Este se encarga de mostrar un cuadro de dialogo usando como base los elementos dentro de este comentario
      <MiDialogo/>
      <ListaProductoDialogo/> 
      <ListaVerduras/> */}
    </div>
  );
}
