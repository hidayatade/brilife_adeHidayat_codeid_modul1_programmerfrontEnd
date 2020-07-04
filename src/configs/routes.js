import {HomesPage} from '../scenes/Homes';
import {ItemsPage, ItemPage} from '../scenes/Items';
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
        path: '/items/add',
        component: ItemPage
    },
    {
        path: '/items/:id',
        component: ItemPage
    },
    {
        path: '/items',
        component: ItemsPage
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