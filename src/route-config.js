import React from 'react';
import Homepage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import StorePage from './pages/StorePage';
import LoginPage from './pages/LoginPage';
import NotfoundPage from './pages/NotfoundPage';
import UserControl from './components/UserControl';

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Homepage />
    },
    {
        path: "/about",
        exact: true,
        main: () => <AboutPage />
    },
    {
        path: "/products",
        exact: true,
        main: () => <ProductsPage />
    },
    {
        path: "/store",
        exact: true,
        main: () => <StorePage />
    },
    {
        page: '/login',
        exact: true,
        main: () => <LoginPage />
    },
    {
        page: '/user-control',
        exact: true,
        main: () => <UserControl />
    },
    {
        page: '',
        exact: true,
        main: () => <NotfoundPage />
    }
];

export default routes;