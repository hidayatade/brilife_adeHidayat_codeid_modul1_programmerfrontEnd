import {HomesPage} from '../scenes/Homes';
import ErrorPage from '../scenes/error';

const routes = [
    
    {
        path: '/',
        component: HomesPage
    },
    {
        path: '/homes',
        component: HomesPage
    },
    {
        path: '*',
        component: ErrorPage, 
        props: {
            code:404
        }
    }
];



export default routes;