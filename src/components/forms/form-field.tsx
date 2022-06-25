import { ReactElement } from 'react';
import { Trans } from 'react-i18next';
import { LargeText } from 'src/styles/components/font';
import styled from 'styled-components';

export const Field = styled.div`
    text-align: left;

    div + div {
        margin-top: 8px;
    }

    .form-control {
        padding-right: 6px;
    }
`;

export function FromField(props: { fieldName: string; children: ReactElement | ReactElement[]; required?: boolean }) {
    return (
        <Field className="form-field">
            <div>
                <LargeText>
                    <Trans>{props.fieldName}</Trans>
                </LargeText>
                {props.required && <span> *</span>}
            </div>
            <div className="form-control">{props.children}</div>
        </Field>
    );
}
