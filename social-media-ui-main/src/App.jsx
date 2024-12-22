import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { publicRoutes, privateRoutes, ScrollToTop } from './routes';
//import { updateUser } from './action/UserAction';

function App() {
    const token = useSelector((state) => state.user.token);
    const userInfo = useSelector((state) => state.user.user);

    console.log(token);
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                token ? (
                                    userInfo?.role.name === 'CUSTOMER' ? (
                                        <Navigate to="/" />
                                    ) : (
                                        <Navigate to="/admin" />
                                    )
                                ) : (
                                    <Page />
                                )
                            }
                        ></Route>
                    );
                })}
                {privateRoutes.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                token ? (
                                    <Page />
                                ) : userInfo?.role.name !== 'CUSTOMER' ? (
                                    <Navigate to="/login" />
                                ) : (
                                    <Navigate to="/login/admin" />
                                )
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
