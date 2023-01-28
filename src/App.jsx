import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
    const routes = createBrowserRouter(AppRoutes);

    return (
        <React.StrictMode>
            <RouterProvider router={routes} />
        </React.StrictMode>
    );
}

export default App;
