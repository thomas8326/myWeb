import styled from 'styled-components';

export const FormInputWrapper = styled.input`
    height: 100%;
    flex: 1;
    padding: 0 6px;

    background: #ffffff;

    border: 1px solid #c6c6c6;
    border-radius: 4px;
`;

export function FormInput(props: { name: string; type?: string; callback: (e: { name: string; value: any }) => void }) {
    const { callback, name, type } = props;
    return (
        <FormInputWrapper
            type={type || 'text'}
            name={name}
            onInput={(e) => callback({ name: e.currentTarget.name, value: e.currentTarget.value })}
        ></FormInputWrapper>
    );
}
