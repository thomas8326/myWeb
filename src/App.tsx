import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from 'src/pages/main-page';
import Showroom from 'src/containers/showroom/showroom';
import DashBoard from 'src/pages/dashboard';
import { theme } from 'src/styles/base/theme';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Resume from 'src/pages/resume';
import { ModalProvider } from 'src/contexts/modal';
import { ClientStorageProvider } from 'src/contexts/client-storage';
import { Provider } from 'react-redux';
import { reduxStorage } from 'src/reducers/storage';

function App() {
    return (
        <Suspense>
            <Provider store={reduxStorage}>
                <ClientStorageProvider>
                    <ThemeProvider theme={theme}>
                        <ModalProvider>
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<MainPage />}>
                                        <Route path="show-room" element={<Showroom />}></Route>
                                    </Route>
                                    <Route path="admin-dashboard" element={<DashBoard />}>
                                        <Route path="resume" element={<Resume />}></Route>
                                    </Route>
                                </Routes>
                            </BrowserRouter>
                        </ModalProvider>
                    </ThemeProvider>
                </ClientStorageProvider>
            </Provider>
        </Suspense>
    );
}

export default App;
