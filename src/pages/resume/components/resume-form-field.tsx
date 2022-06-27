import { ReactElement } from 'react';
import { Trans } from 'react-i18next';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    border: 1px solid;
    padding: 15px;
    margin-bottom: 10px;
`;

const Title = styled.span`
    position: absolute;
    top: -10px;
    padding: 0 12px;
    background: ${(props) => props.theme.background};
`;

function ResumeFormSection(props: { children: ReactElement | ReactElement[]; title: string }) {
    return (
        <Container>
            <Title>
                <Trans>{props.title}</Trans>
            </Title>
            <div>{props.children}</div>
        </Container>
    );
}

export default ResumeFormSection;
