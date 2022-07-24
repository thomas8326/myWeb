import { ReactElement } from 'react';
import { Trans } from 'react-i18next';
import { CssConfig } from 'src/models/css-config';
import { LargeText } from 'src/styles/components/font';
import styled, { css } from 'styled-components';

export const Field = styled.div<CssConfig>`
    text-align: left;

    height: ${(props) => props?.height || 'inherit'};
    min-height: ${(props) => props?.minHeight || 'inherit'};

    display: flex;
    flex-direction: column;

    .form-control {
        margin-top: 6px;
        flex: 1;
        display: flex;
        flex-direction: column;
    }
`;

interface FromFieldProps {
    fieldName: string;
    children: ReactElement | ReactElement[];
    isTranslate?: boolean;
    required?: boolean;
    cssConfig?: CssConfig;
}

export function FromField(props: FromFieldProps = { fieldName: '', children: [], isTranslate: true }) {
    const { fieldName, children, required, cssConfig, isTranslate } = props;

    return (
        <Field className="form-field" {...cssConfig}>
            <div>
                <LargeText>{isTranslate ? <Trans>{fieldName}</Trans> : <span>{fieldName}</span>}</LargeText>
                {required && <span> *</span>}
            </div>
            <div className="form-control">{children}</div>
        </Field>
    );
}
