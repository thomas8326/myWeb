import { CssConfig } from 'src/models/css-config';
import styled from 'styled-components';

export const FullScreenLayout = styled.div`
    width: 100%
    height: 100%;
`

export const RowMarginLayout = styled.div<CssConfig>`
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    margin-bottom: ${props => props.marginBottom};
`
