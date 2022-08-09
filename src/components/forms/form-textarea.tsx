import { InputHTMLAttributes } from 'react';
import { FormCallback } from 'src/models/form';
import styled from 'styled-components';

export const FormTextareaWrapper = styled.textarea`
    height: 100%;
    flex: 1;
    padding: 6px;

    background: #ffffff;

    border: 1px solid #c6c6c6;
    border-radius: 4px;
`;

export interface FormTextareaType extends InputHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    idx?: number;
    value?: string;
    callback: (e: FormCallback) => void;
}

export function FormTextarea({ callback, idx, ...props }: FormTextareaType) {
    return (
        <FormTextareaWrapper
            {...props}
            onInput={(e) => callback({ name: e.currentTarget.name, value: e.currentTarget.value, index: idx || 0 })}
        ></FormTextareaWrapper>
    );
}
