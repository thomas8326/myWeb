import { CssConfig } from 'src/models/css-config';
import styled from 'styled-components';

export const Text = styled.div<CssConfig>`
    color: ${(props) => props.color};
    align-items: ${(props) => props?.alignItems ?? 'center'};
    display: flex;
    font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '14px')};
`;

export const Options = styled.ul<CssConfig>`
    margin: 8px 0;
    list-style-type: ${(props) => props.listStyleType};
    columns: ${(props) => props.columns ?? 1};
`;

export const Option = styled.li<CssConfig>``;
