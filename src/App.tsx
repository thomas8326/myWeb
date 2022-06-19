// import Login from 'Containers/login/login';
import React from 'react';
import { Provider } from 'react-redux/es/exports';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from 'src/components/main-layout';
import Showroom from 'src/containers/showroom/showroom';
import DashBoard from 'src/pages/dashboard';
import { reduxStorage } from 'src/reducers';
import { theme } from 'src/styles/base/theme';
import { ThemeProvider } from 'styled-components';
import './App.css';

function App() {
    return (
        <>
            <Provider store={reduxStorage}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<MainLayout />}>
                                <Route path="show-room" element={<Showroom />}></Route>
                            </Route>
                            <Route path="admin">
                                <Route path="dashboard" element={<DashBoard />}></Route>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        </>
    );
}

export default App;
