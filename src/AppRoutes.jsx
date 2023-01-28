import Home from './pages/home/Home';
import Test from './pages/test/Test';

const AppRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/test',
        element: <Test />,
    },
];

export default AppRoutes;
