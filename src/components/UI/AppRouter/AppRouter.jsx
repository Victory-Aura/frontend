import React from 'react';

import { Route,Routes } from 'react-router-dom';

import { router } from '../../pages/index';


const AppRouter = () => {
    return (
        <Routes>
            {router.map(route => 
                <Route element={< route.element />} path={route.path} key={router.key} />
            )}
        </Routes>
    );
};

export default AppRouter;