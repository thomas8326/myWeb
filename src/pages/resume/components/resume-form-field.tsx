import { ReactElement } from 'react';
import { Trans } from 'react-i18next';
import { FlexColumnLayout } from 'src/styles/layouts/flex-layout';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    border: 1px solid;
    padding: 15px;
`;

const Title = styled.span`
    position: absolute;
    top: -10px;
    padding: 0 12px;
    background: ${(props) => props.theme.background};
`;

function ResumeFormField(props: { children: ReactElement; title: string }) {
    return (
        <Container>
            <Title>
                <Trans>{props.title}</Trans>
            </Title>
            <div>{props.children}</div>
        </Container>
    );
}

export default ResumeFormField;
