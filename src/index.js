import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/css/index.css';

import App from './App';

const run = () => {
    const container = document.querySelector('#root');
    container.dataset.theme = 'light';

    const root = createRoot(container);
    const app = <App />;

    root.render(app);
};

// Run the application
run();
