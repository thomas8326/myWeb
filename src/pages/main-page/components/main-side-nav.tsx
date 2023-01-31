import styled from 'styled-components';
import image from 'src/assets/avatars/S__15695887.jpg';
import { Avatar } from 'src/styles/components/image';
import { useNavigate } from 'react-router-dom';
import { MainPathUrl } from 'src/enums/main-path-url.enum';

const SideNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-right: 1px solid ${(props) => props.theme.grey.general};
`;

const SideNavInfo = styled.div`
    flex: 0 0 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SideNavList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;

const SideNavItem = styled.li`
    border-bottom: 1px solid ${(props) => props.theme.grey.general};
    padding: 15px 20px;
    cursor: pointer;
`;

const MainSideNav = () => {
    const navigate = useNavigate();

    return (
        <SideNavContainer>
            <SideNavInfo>
                <Avatar src={image} />
                <span>施宏儒</span>
                <p>我是一個...</p>
            </SideNavInfo>
            <SideNavList>
                <SideNavItem>Home</SideNavItem>
                <SideNavItem onClick={() => navigate(MainPathUrl.Resume)}>Resume</SideNavItem>
                <SideNavItem>My Components</SideNavItem>
                <SideNavItem>My Projects</SideNavItem>
            </SideNavList>
        </SideNavContainer>
    );
};

export default MainSideNav;
