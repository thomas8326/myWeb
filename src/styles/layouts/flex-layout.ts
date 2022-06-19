import styled from 'styled-components';

export const FlexColumnLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const FlexRowLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
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
