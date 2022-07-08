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

export function FromField(props: {
    fieldName: string;
    children: ReactElement | ReactElement[];
    required?: boolean;
    cssConfig?: CssConfig;
}) {
    const { fieldName, children, required, cssConfig } = props;

    return (
        <Field className="form-field" {...cssConfig}>
            <div>
                <LargeText>
                    <Trans>{fieldName}</Trans>
                </LargeText>
                {required && <span> *</span>}
            </div>
            <div className="form-control">{children}</div>
        </Field>
    );
}
