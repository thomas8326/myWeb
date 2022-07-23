import { TransKey } from 'src/enums/translation-key.enum';
import ResumeFormSection from 'src/pages/resume/components/resume-form-section';
import { useAppDispatch } from 'src/reducers/storage';
import { addNewWorkExperience, getResume } from 'src/reducers/resume-slice';
import { LanguageType } from 'src/models/resume';
import { useForm } from 'src/hooks/useForm';
import { FromControl } from 'src/models/form';
import styled from 'styled-components';
import BasicInfoForm from 'src/pages/resume/components/resume-about-me';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ReduxStorage } from 'src/models/redux-storage';

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

    const { data, loading } = useSelector((state: ReduxStorage) => state.resume);

    useEffect(() => {
        dispatch(getResume());
    }, []);

    return (
        <ResumeContainer>
            <ResumeFormSection
                title={TransKey.BasicInfo}
                chinese={
                    <BasicInfoForm
                        lng={LanguageType.Chinese}
                        basicInfo={data?.[LanguageType.Chinese]?.basicInfo}
                    ></BasicInfoForm>
                }
                english={
                    <BasicInfoForm
                        lng={LanguageType.English}
                        basicInfo={data?.[LanguageType.English]?.basicInfo}
                    ></BasicInfoForm>
                }
            ></ResumeFormSection>

            {/* <ResumeFormSection title={TransKey.WorkExperience}>
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
            </ResumeFormSection> */}
        </ResumeContainer>
    );
}

export default Resume;
