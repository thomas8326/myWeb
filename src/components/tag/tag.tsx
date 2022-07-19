import { BaseSyntheticEvent, ReactElement } from 'react';
import styled from 'styled-components';
import { SmallText } from 'src/styles/components/font';

const TagContainer = styled.div`
    filter: drop-shadow(0px 0px 3px #c7c7c7);
    margin-left: -6px;
`;

const TagWrapper = styled.div`
    clip-path: polygon(20% 0%, 86% 0, 100% 100%, 0% 100%);
    background: white;
    padding: 5px 15px;
    cursor: pointer;
    width: 40px;
    text-align: center;
`;

type TagProps = {
    active?: boolean;
    children: ReactElement | ReactElement[] | string;
    onClick: (e: BaseSyntheticEvent) => void;
};

export function Tag(props: TagProps) {
    return (
        <TagContainer onClick={props.onClick} style={{ zIndex: props.active ? 1 : 0 }}>
            <TagWrapper>
                <SmallText>{props.children}</SmallText>
            </TagWrapper>
        </TagContainer>
    );
}
