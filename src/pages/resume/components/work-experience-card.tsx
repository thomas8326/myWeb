import { ReactElement } from 'react';
import { MinusButton, PlusButton } from 'src/styles/components/button';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    border-radius: 5px;
    box-shadow: 0 4px 24px #1622330a, 0 -2px 24px #1622330a, 0 4px 4px #1622330a, 0 -2px 4px #1622330a;
    padding: 15px;

    & > .btn-group {
        position: absolute;
        margin: 16px;
        top: 0;
        right: 0;
    }
`;

function WorkExperienceCard(props: { children: ReactElement | ReactElement[] }) {
    const { children } = props;

    return (
        <Container>
            <div className="btn-group">
                <MinusButton></MinusButton>
                <PlusButton></PlusButton>
            </div>
            {children}
        </Container>
    );
}

export default WorkExperienceCard;
