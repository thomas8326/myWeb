import { Outlet } from 'react-router-dom';
import DashboardHeader from 'src/pages/dashboard/components/dashboard-header';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;

    .main {
        flex: 1;
    }
`;

function DashBoard() {
    return (
        <Container>
            <div className="header">
                <DashboardHeader />
            </div>
            <div>
                <Outlet />
            </div>
        </Container>
    );
}

export default DashBoard;
