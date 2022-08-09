import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export const FormInputWrapper = styled.input`
    height: 100%;
    flex: 1;
    padding: 0 6px;

    background: #ffffff;

    border: 1px solid #c6c6c6;
    border-radius: 4px;
`;

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    callback: (e: { name: string; value: any; index: number }) => void;
    idx?: number;
}

export const FormInput = ({ callback, idx, ...props }: FormInputProps) => {
    return (
        <FormInputWrapper
            {...props}
            onInput={(e) => callback({ name: e.currentTarget.name, value: e.currentTarget.value, index: idx || 0 })}
        ></FormInputWrapper>
    );
};
