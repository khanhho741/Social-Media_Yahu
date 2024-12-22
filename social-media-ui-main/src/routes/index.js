import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import UserProfile from '../pages/UserProfile';
import Message from '../pages/Message';
import Register from '../pages/Register';
import LoginAdmin from '@/pages/LoginAdmin';
import HomeAdmin from '@/pages/HomeAdmin';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [pathname]);
    return null;
};
//
const publicRoutes = [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/login/admin', component: LoginAdmin },
];

//private Routes
//Access only login
const privateRoutes = [
    { path: '/', component: Home },
    { path: '/admin', component: HomeAdmin },
    { path: '/profile', component: Profile },
    { path: '/messages', component: Message },
    { path: '/:username', component: UserProfile },
    // { path: '/test', component: Test },
];

export { publicRoutes, privateRoutes, ScrollToTop };
