import { ReactElement, useState } from 'react';
import { FromField } from 'src/components/forms/form-field';
import { FormInput } from 'src/components/forms/form-input';
import { FormTextarea } from 'src/components/forms/form-textarea';
import { LanguageType } from 'src/models/resume';
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

const CHINESE_WORDING = {
    CompanyName: '公司名稱',
    Position: '職位',
    StartDate: '開始時間',
    EndDate: '結束時間',
    ProjectName: '專案名稱',
    ProjectDetail: '專案細節',
    DeleteProject: '刪除專案',
    AddProject: '新增專案',
    DeleteExperience: '刪除工作經驗',
    AddExperience: '新增工作經驗',
    Update: '更新',
};

const ENGLISH_WORDING = {
    CompanyName: 'Company Name',
    Position: 'Position',
    StartDate: 'Start Date',
    EndDate: 'End Date',
    ProjectName: 'Project Name',
    ProjectDetail: 'Project Detail',
    DeleteProject: 'Delete Project',
    AddProject: 'Add Project',
    DeleteExperience: 'Delete Experience',
    AddExperience: 'Add Experience',
    Update: 'Update',
};

interface WorkExperienceProps {
    lng?: LanguageType;
}

function WorkExperienceForm(props: WorkExperienceProps) {
    const { lng } = props;

    const [rowText] = useState(lng === LanguageType.Chinese ? CHINESE_WORDING : ENGLISH_WORDING);

    const updateBasicInfo = () => {};

    return (
        <>
            <WorkExperienceCard>
                <FlexRowLayout elementsMargin="8px" marginBottom="10px">
                    <FromField fieldName={rowText.CompanyName} cssConfig={{ height: `${60}px` }}>
                        <FormInput name="companyName" callback={() => {}}></FormInput>
                    </FromField>
                    <FromField fieldName={rowText.Position} cssConfig={{ height: `${60}px` }}>
                        <FormInput name="companyName" callback={() => {}}></FormInput>
                    </FromField>
                </FlexRowLayout>
                <FlexRowLayout elementsMargin="8px">
                    <FromField fieldName={rowText.StartDate} cssConfig={{ height: `${60}px` }}>
                        <FormInput name="companyName" callback={() => {}}></FormInput>
                    </FromField>
                    <FromField fieldName={rowText.EndDate} cssConfig={{ height: `${60}px` }}>
                        <FormInput name="companyName" callback={() => {}}></FormInput>
                    </FromField>
                </FlexRowLayout>
                <HorizontalLine />
                <FlexColumnLayout elementsMargin="8px">
                    <FromField fieldName={rowText.ProjectName} cssConfig={{ height: `${60}px` }}>
                        <FormInput name="companyName" callback={() => {}}></FormInput>
                    </FromField>
                    <FromField fieldName={rowText.ProjectDetail} cssConfig={{ minHeight: `${140}px` }}>
                        <FormTextarea name="basicInfo" callback={() => {}}></FormTextarea>
                    </FromField>
                    <div className="btn-group">
                        <RaisedButton onClick={updateBasicInfo}>{rowText.DeleteProject}</RaisedButton>
                        <RaisedButton onClick={updateBasicInfo}>{rowText.AddProject}</RaisedButton>
                    </div>
                </FlexColumnLayout>
            </WorkExperienceCard>
            <div className="btn-group">
                <RaisedButton onClick={updateBasicInfo}>{rowText.DeleteExperience}</RaisedButton>
                <RaisedButton onClick={updateBasicInfo}>{rowText.AddExperience}</RaisedButton>
                <RaisedButton onClick={updateBasicInfo}>{rowText.Update}</RaisedButton>
            </div>
        </>
    );
}

export default WorkExperienceForm;
