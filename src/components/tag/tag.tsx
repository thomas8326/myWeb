import { BaseSyntheticEvent, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { SmallText } from 'src/styles/components/font';

const TagContainer = styled.div`
    filter: drop-shadow(0px 0px 3px #c7c7c7);
    margin-left: -6px;
`;

const TagWrapper = styled.div<{ active: boolean }>`
    clip-path: polygon(20% 0%, 86% 0, 100% 100%, 0% 100%);
    padding: 5px 15px;
    cursor: pointer;
    width: 40px;
    text-align: center;

    ${(props) =>
        props.active
            ? css`
                  background: white;
              `
            : css`
                  background: #e9e9e9;
              `}
`;

type TagProps = {
    active?: boolean;
    children: ReactElement | ReactElement[] | string;
    onClick: (e: BaseSyntheticEvent) => void;
};

export function Tag(props: TagProps) {
    return (
        <TagContainer onClick={props.onClick} style={{ zIndex: props.active ? 1 : 0 }}>
            <TagWrapper active={!!props.active}>
                <SmallText>{props.children}</SmallText>
            </TagWrapper>
        </TagContainer>
    );
}
