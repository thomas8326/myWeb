import styled from 'styled-components';

export const FormTextareaWrapper = styled.textarea`
    height: 100%;
    flex: 1;
    padding: 6px;

    background: #ffffff;

    border: 1px solid #c6c6c6;
    border-radius: 4px;
`;

export interface FormTextareaType {
    name: string;
    value?: string;
    callback: (e: { name: string; value: string }) => void;
}

export function FormTextarea(props: FormTextareaType) {
    const { callback, value, name } = props;
    return (
        <FormTextareaWrapper
            name={name}
            defaultValue={value}
            onInput={(e) => callback({ name: e.currentTarget.name, value: e.currentTarget.value })}
        ></FormTextareaWrapper>
    );
}
