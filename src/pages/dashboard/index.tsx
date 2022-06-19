import DashboardHeader from 'src/pages/dashboard/dashboard-header';
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
            <div>Dashboard</div>
        </Container>
    );
}

export default DashBoard;
