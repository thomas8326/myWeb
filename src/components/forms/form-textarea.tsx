import styled from 'styled-components';

export const FormTextareaWrapper = styled.textarea`
    height: 100%;
    flex: 1;
    padding: 6px;

    background: #ffffff;

    border: 1px solid #c6c6c6;
    border-radius: 4px;
`;

export function FormTextarea(props: { name: string; callback: (e: { name: string; value: any }) => void }) {
    const { callback, name } = props;
    return (
        <FormTextareaWrapper
            name={name}
            onInput={(e) => callback({ name: e.currentTarget.name, value: e.currentTarget.value })}
        ></FormTextareaWrapper>
    );
}
