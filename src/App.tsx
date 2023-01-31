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
import { ResumeViewer } from 'src/pages/resume/resumeViewer';
import { MainPathUrl } from 'src/enums/main-path-url.enum';

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
                                        <Route path={MainPathUrl.Showroom} element={<Showroom />}></Route>
                                        <Route path={MainPathUrl.Resume} element={<ResumeViewer />}></Route>
                                    </Route>
                                    <Route path={MainPathUrl.DashBoard} element={<DashBoard />}>
                                        <Route path={MainPathUrl.Resume} element={<Resume />}></Route>
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
