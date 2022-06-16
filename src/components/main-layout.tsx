import { Outlet } from 'react-router-dom';
import MainSideNav from 'src/components/main-side-nav';

import styled from 'styled-components';

const MainLayoutContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    .side-nav {
        flex: 0 0 300px;
    }

    .main-view {
        flex: 1;
    }
`;

const MainLayout = () => (
    <MainLayoutContainer>
        <div className="side-nav">{<MainSideNav />}</div>
        <div className="main-view">
            <Outlet />
        </div>
    </MainLayoutContainer>
);

export default MainLayout;
