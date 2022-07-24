import { ReactElement } from 'react';
import { FromField } from 'src/components/forms/form-field';
import { FormInput } from 'src/components/forms/form-input';
import { FormTextarea } from 'src/components/forms/form-textarea';
import { MinusButton, PlusButton, RaisedButton } from 'src/styles/components/button';
import { HorizontalLine } from 'src/styles/components/line';
import { FlexRowLayout, FlexColumnLayout } from 'src/styles/layouts/flex-layout';
import styled from 'styled-components';

const CardContainer = styled.div`
    position: relative;
    border-radius: 5px;
    box-shadow: 0 4px 24px #1622330a, 0 -2px 24px #1622330a, 0 4px 4px #1622330a, 0 -2px 4px #1622330a;
    padding: 15px;

    & > .btn-group {
        position: absolute;
        margin: 16px;
        top: 0;
        right: 0;
    }
`;

function WorkExperienceCard(props: { children: ReactElement | ReactElement[] }) {
    const { children } = props;

    return (
        <CardContainer>
            <div className="btn-group">
                <MinusButton></MinusButton>
                <PlusButton></PlusButton>
            </div>
            {children}
        </CardContainer>
    );
}

function WorkExperienceForm() {
    const updateBasicInfo = () => {};

    return (
        <>
            <WorkExperienceCard>
                <FlexRowLayout elementsMargin="8px" marginBottom="10px">
                    <FromField fieldName="Company Name" cssConfig={{ height: `${60}px` }}>
                        <FormInput name="companyName" callback={() => {}}></FormInput>
                    </FromField>
                    <FromField fieldName="Position" cssConfig={{ height: `${60}px` }}>
                        <FormInput name="companyName" callback={() => {}}></FormInput>
                    </FromField>
                </FlexRowLayout>
                <FlexRowLayout elementsMargin="8px">
                    <FromField fieldName="Start Date" cssConfig={{ height: `${60}px` }}>
                        <FormInput name="companyName" callback={() => {}}></FormInput>
                    </FromField>
                    <FromField fieldName="End Date" cssConfig={{ height: `${60}px` }}>
                        <FormInput name="companyName" callback={() => {}}></FormInput>
                    </FromField>
                </FlexRowLayout>
                <HorizontalLine />
                <FlexColumnLayout elementsMargin="8px">
                    <FromField fieldName="Project Name" cssConfig={{ height: `${60}px` }}>
                        <FormInput name="companyName" callback={() => {}}></FormInput>
                    </FromField>
                    <FromField fieldName="Project Detail" cssConfig={{ minHeight: `${140}px` }}>
                        <FormTextarea name="basicInfo" callback={() => {}}></FormTextarea>
                    </FromField>
                    <div className="btn-group">
                        <RaisedButton onClick={updateBasicInfo}>delete project</RaisedButton>
                        <RaisedButton onClick={updateBasicInfo}>add project</RaisedButton>
                    </div>
                </FlexColumnLayout>
            </WorkExperienceCard>
            <div className="btn-group">
                <RaisedButton onClick={updateBasicInfo}>delete Experience</RaisedButton>
                <RaisedButton onClick={updateBasicInfo}>add Experience</RaisedButton>
                <RaisedButton onClick={updateBasicInfo}>update</RaisedButton>
            </div>
        </>
    );
}

export default WorkExperienceForm;
