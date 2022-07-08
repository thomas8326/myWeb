import { TransKey } from 'src/enums/translation-key.enum';
import ResumeFormSection from 'src/pages/resume/components/resume-form-section';
import { useAppDispatch } from 'src/reducers/storage';
import { addNewWorkExperience, post } from 'src/reducers/resume-slice';
import { WorkExperience } from 'src/models/resume';
import { http } from 'src/http/http';
import { FormTextarea } from 'src/components/forms/form-textarea';
import { FromField } from 'src/components/forms/form-field';
import { useForm } from 'src/hooks/useForm';
import { FromControl } from 'src/models/form';
import { RaisedButton } from 'src/styles/components/button';
import styled from 'styled-components';
import { FormInput } from 'src/components/forms/form-input';
import { FlexColumnLayout, FlexRowLayout } from 'src/styles/layouts/flex-layout';
import WorkExperienceCard from 'src/pages/resume/components/work-experience-card';
import { HorizontalLine } from 'src/styles/components/line';

const ResumeContainer = styled.div`
    .btn-group {
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;

        & > * {
            margin-left: 6px;
        }
    }

    .company-info {
        .form-field + .form-field {
            margin-left: 12px;
        }
    }
`;

function Resume() {
    const dispatch = useAppDispatch();
    const {} = useForm({
        aboutMe: new FromControl('', []),
    });

    const updateBasicInfo = () => {};

    const submit = () => {
        dispatch(addNewWorkExperience(new WorkExperience()));
    };

    return (
        <ResumeContainer>
            <ResumeFormSection title={TransKey.BasicInfo}>
                <FromField fieldName={TransKey.AboutMe} cssConfig={{ minHeight: `${140}px` }}>
                    <FormTextarea name="basicInfo" callback={() => {}}></FormTextarea>
                </FromField>
                <div className="btn-group">
                    <RaisedButton onClick={updateBasicInfo}>{TransKey.Update}</RaisedButton>
                </div>
            </ResumeFormSection>
            <ResumeFormSection title={TransKey.WorkExperience}>
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
            </ResumeFormSection>
        </ResumeContainer>
    );
}

export default Resume;
