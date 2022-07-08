import { CssConfig } from 'src/models/css-config';
import styled from 'styled-components';

export const FlexColumnLayout = styled.div<CssConfig>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    margin-bottom: ${props => props.marginBottom};

    & > * + * {
        margin-top: ${props => props.elementsMargin};
    }
`

export const FlexRowLayout = styled.div<CssConfig>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    margin-bottom: ${props => props.marginBottom};

    & > * + * {
        margin-left: ${props => props.elementsMargin};
    }
`

export const FlexBetweenLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const FlexCenterLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FlexOne = styled.div`
    flex: 1;
`
