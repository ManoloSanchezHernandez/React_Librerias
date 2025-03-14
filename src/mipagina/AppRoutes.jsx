import { Route, Routes } from 'react-router-dom';
import PageHome from './home/PageHome';
import PageContact from './contact/PageContact';
import PageAboutUs from './aboutus/PageAboutUs';
import NewHome from '../pages/NewHome';
import NotFound from './NotFound';
import DetallesDash from './dash/DetallesDash';
import PageDash from './dash/PageDash';
import PageTrading from './dash/PageTrading';


export default function AppRoutes() {

    return (
        <Routes>
            {/* Hay una ruta principal que a su vez lleva otras rutas dentro de ella, y se triplican por que tenemos tres paginas principales */}

            {/* esta es la ruta que se usa para la pagina de Home */}
            <Route path='/' element={<PageHome />} />

            {/* esta es la ruta que nos lleva a Contact Us  */}
            <Route path='contactus' element={<PageContact />} />

            {/* esta es la ruta que nos lleva a About */}
            <Route path='about' element={<PageAboutUs />} />

            {/* Esta es la ruta que nos lleva a la pagina principal, que es la que se muestra por defecto */}
            <Route path='recetas' element={<NewHome />} />
            <Route path='recetas/:id' element={<DetallesDash />} />




            {/* Esta ruta se encarga de que cuando estemos dentro de la ruta de dash tendremos multiples elementos posibles a cargar */}
            <Route path='/dash'>
                <Route index element={<PageDash />} />
                <Route path='trading' element={<PageTrading />} />


            </Route>

            {/* Lo que hace esta ruta es que cuando ponemos un ruta que no esta definida nos redirige a esta pagina que dice pagina no encontrada */}
            <Route path='*' element={<NotFound />} />
        </Routes>
    )

}