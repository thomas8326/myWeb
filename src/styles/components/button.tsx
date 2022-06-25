import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

const Button = styled.button`
    box-sizing: border-box;
    position: relative;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    outline: none;
    border: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    display: inline-block;
    white-space: nowrap;
    text-decoration: none;
    vertical-align: baseline;
    text-align: center;
    margin: 0;
    min-width: 64px;
    line-height: 36px;
    padding: 0 16px;
    border-radius: 4px;
    overflow: visible;

    &:hover {
        background: #f7f7f7;
    }

    &:active {
        background: #e8e8e8;
    }
`;

export const BasicButton = styled(Button)`
    background: transparent;
`;

export const RaisedButton = styled(Button)<{ bgColor?: string }>`
    box-shadow: 0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f;
    background: ${(props) => props.bgColor || 'white'};
}
`;

export const IconButton = styled(BasicButton)`
    padding: 0;
    min-width: 0;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    line-height: 40px;
    border-radius: 50%;
}
`;

export const SettingButton = (props: any) => (
    <IconButton {...props}>
        <FontAwesomeIcon icon={solid('gear')} />
    </IconButton>
);

export const XMarkButton = (props: any) => (
    <IconButton {...props}>
        <FontAwesomeIcon icon={solid('xmark')} />
    </IconButton>
);
