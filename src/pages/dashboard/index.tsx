import { Outlet } from 'react-router-dom';
import DashboardHeader from 'src/pages/dashboard/components/dashboard-header';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;

    .main {
        flex: 1;
        padding: 15px 20px;
    }
`;

function DashBoard() {
    return (
        <Container>
            <div className="header">
                <DashboardHeader />
            </div>
            <div className="main">
                <Outlet />
            </div>
        </Container>
    );
}

export default DashBoard;
