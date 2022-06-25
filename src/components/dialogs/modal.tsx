import React, { createContext, ReactElement, useState, Dispatch, useCallback } from 'react';
import useModal from 'src/hooks/useModal';
import { DialogConfig } from 'src/models/dialog';
import { XMarkButton } from 'src/styles/components/button';
import styled from 'styled-components';

const OverlayContainer = styled.div<DialogConfig>`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;

const OverlayWrapper = styled.div<DialogConfig>`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const OverlayBackdrop = styled.div<DialogConfig>`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    pointer-events: auto;
    background: ${(props) => (props.hasBackdrop ? 'rgba(0,0,0,.32)' : 'rgba(0,0,0,0)')};
`;

const OverlayPane = styled.div<DialogConfig>`
    height: auto;
    width: auto;
    position: relative;
    background: white;
    z-index: 1000;
    border-radius: 10px;
    box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%),
        0px 9px 46px 8px rgb(0 0 0 / 12%);
`;

export const Dialog = styled.div<{ width: string; height: string }>`
    width: ${(props) => props.width + 'px'};
    height: ${(props) => props.height + 'px'};

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .dialog-header {
        padding: 10px 15px 0;
        border-bottom: 1px solid;
        letter-spacing: 1px;

        display: flex;
        flex: 0 0 60px;
        justify-content: space-between;
        align-items: center;

        font-size: 24px;
        font-weight: 700;
    }

    .dialog-content {
        flex: 1;
        padding: 10px 15px;
        overflow-y: auto;
        word-break: break-word;
        overflow-x: hidden;
    }

    .dialog-footer {
        flex: 0 0 40px;
        border-top: 1px solid black;
        padding: 10px 15px;

        display: flex;
        align-items: center;
        justify-content: flex-end;

        button + button {
            margin-left: 6px;
        }
    }
`;

export const DialogHeader = (props: { children: ReactElement | string }) => {
    const { onClose } = useModal();

    return (
        <div className="dialog-header">
            {props.children}
            <XMarkButton onClick={onClose} />
        </div>
    );
};

export const DialogContent = (props: { children: ReactElement | string }) => {
    return <div className="dialog-content">{props.children}</div>;
};

export const DialogFooter = (props: { children: ReactElement | string }) => {
    return <div className="dialog-footer">{props.children}</div>;
};

const Modal = (props: { modal: ReactElement; config: DialogConfig; onClose: (_: any) => void }) => {
    const { modal, config, onClose } = props;

    return (
        <OverlayContainer>
            <OverlayWrapper {...config}>
                <OverlayBackdrop hasBackdrop={config.hasBackdrop} onClick={onClose} />
                <OverlayPane>{modal}</OverlayPane>
            </OverlayWrapper>
        </OverlayContainer>
    );
};

const initDialogConfig: DialogConfig = {
    hasBackdrop: true,
};

export const ModalContext = createContext({
    setModal: (_: any) => {},
    setConfig: (_: any) => {},
    onClose: (_: any) => {},
});

export const ModalProvider = (props: { children: ReactElement }) => {
    const [modal, setModal] = useState<ReactElement | null>(null);
    const [config, setConfig] = useState<DialogConfig>(initDialogConfig);

    const onClose = useCallback(() => {
        setModal(null);
    }, [setModal]);

    return (
        <ModalContext.Provider value={{ setModal, setConfig, onClose }} {...props}>
            {props.children}
            {modal && <Modal modal={modal} config={{ ...initDialogConfig, ...config }} onClose={onClose}></Modal>}
        </ModalContext.Provider>
    );
};
