import { Trans } from 'react-i18next';
import { Option } from 'src/models/options';
import styled from 'styled-components';

export const FormInputWrapper = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 6px;

    background: #ffffff;

    border: 1px solid #c6c6c6;
    border-radius: 4px;
`;

export function FormSelection(props: { defaultOption: string; options: Option[]; callback: (value: string) => void }) {
    const { callback, options, defaultOption } = props;
    return (
        <FormInputWrapper defaultValue={defaultOption} onChange={(e) => callback(e.currentTarget.value)}>
            {options.map((option) => (
                <option key={option.id} value={option.value}>
                    <Trans>{option.text}</Trans>
                </option>
            ))}
        </FormInputWrapper>
    );
}
