import { useEffect } from 'react';
import { Fragment, ReactElement, useState } from 'react';
import { useForm } from 'src/components/forms/form';
import { FormDate } from 'src/components/forms/form-date';
import { FromField } from 'src/components/forms/form-field';
import { FormInput } from 'src/components/forms/form-input';
import { FormTextarea } from 'src/components/forms/form-textarea';
import { LanguageType, WorkExperience } from 'src/models/resume';
import { updateChineseWorkExperiences, updateEnglishWorkExperiences } from 'src/reducers/resume-slice';
import { useAppDispatch } from 'src/reducers/storage';
import { ButtonGroup, MinusButton, PlusButton, RaisedButton } from 'src/styles/components/button';
import { HorizontalLine } from 'src/styles/components/line';
import { FlexRowLayout, FlexColumnLayout } from 'src/styles/layouts/flex-layout';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Container = styled.div`
    & > * + * {
        margin-top: 10px;
    }
`;

const CardContainer = styled.div`
    position: relative;
    border-radius: 5px;
    box-shadow: 0 4px 24px #1622330a, 0 -2px 24px #1622330a, 0 4px 4px #1622330a, 0 -2px 4px #1622330a;
    padding: 15px;

    & > .btn-group {
        position: absolute;
        top: 10px;
        right: 10px;
    }
`;

const NewProjectButton = styled.div`
    border: 1px dashed black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    padding: 100px;
    cursor: pointer;

    &:hover {
        background-color: #f5f5f5;
    }
`;

function WorkExperienceCard(props: {
    children: ReactElement | ReactElement[];
    onPlus?: () => void;
    onMinus?: () => void;
}) {
    const { children, onPlus, onMinus } = props;

    return (
        <CardContainer>
            <div className="btn-group">
                <MinusButton onClick={() => onMinus && onMinus()}></MinusButton>
                <PlusButton onClick={() => onPlus && onPlus()}></PlusButton>
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
    workExperiences?: WorkExperience[];
}

interface experienceFormProps {
    rowText: typeof CHINESE_WORDING;
    experience: WorkExperience;
    update: (experience: WorkExperience) => void;
}

function ExperienceForm(data: experienceFormProps) {
    const { rowText, experience, update } = data;

    const { values, handleChange, setFieldValue, updateFields } = useForm<WorkExperience>({
        initialValues: experience,
    });

    const addProject = () => {
        values.projects.push({ id: uuidv4(), name: '', description: '' });
        updateFields();
    };

    const removeProject = (idx: number) => {
        values.projects.splice(idx, 1);
        updateFields();
    };

    const onUpdate = () => {
        update(values);
    };

    return (
        <>
            <FlexRowLayout elementsMargin="8px" marginBottom="10px">
                <FromField fieldName={rowText.CompanyName} cssConfig={{ height: `${60}px` }}>
                    <FormInput name="companyName" value={values.companyName} callback={handleChange}></FormInput>
                </FromField>
                <FromField fieldName={rowText.Position} cssConfig={{ height: `${60}px` }}>
                    <FormInput name="position" value={values.position} callback={handleChange}></FormInput>
                </FromField>
            </FlexRowLayout>
            <FlexRowLayout elementsMargin="8px">
                <FromField fieldName={rowText.StartDate} cssConfig={{ height: `${60}px` }}>
                    <FormDate value={values.startDate} callback={(date) => setFieldValue('startDate', date)}></FormDate>
                </FromField>
                <FromField fieldName={rowText.EndDate} cssConfig={{ height: `${60}px` }}>
                    <FormDate value={values.endDate} callback={(date) => setFieldValue('endDate', date)}></FormDate>
                </FromField>
            </FlexRowLayout>
            <HorizontalLine />
            <FlexColumnLayout elementsMargin="8px">
                {values.projects.map((value, idx) => (
                    <Fragment key={value.id}>
                        <FromField fieldName={rowText.ProjectName} cssConfig={{ height: `${60}px` }}>
                            <FormInput
                                idx={idx}
                                name={`projects.${idx}.name`}
                                value={value.name}
                                callback={handleChange}
                            ></FormInput>
                        </FromField>
                        <FromField fieldName={rowText.ProjectDetail} cssConfig={{ minHeight: `${140}px` }}>
                            <FormTextarea
                                idx={idx}
                                name={`projects[${idx}].description`}
                                value={value.description}
                                callback={handleChange}
                            ></FormTextarea>
                        </FromField>
                        {values.projects.length > 1 && (
                            <div className="btn-group">
                                <RaisedButton onClick={() => removeProject(idx)}>{rowText.DeleteProject}</RaisedButton>
                            </div>
                        )}
                    </Fragment>
                ))}
            </FlexColumnLayout>
            <NewProjectButton onClick={addProject}>{rowText.AddProject}</NewProjectButton>
            <ButtonGroup position="end">
                <RaisedButton onClick={onUpdate}>{rowText.Update}</RaisedButton>
            </ButtonGroup>
        </>
    );
}

function WorkExperienceForm(props: WorkExperienceProps) {
    const { lng, workExperiences } = props;
    const [experiences, setExperiences] = useState<WorkExperience[]>([]);
    const dispatch = useAppDispatch();

    const [rowText] = useState(lng === LanguageType.Chinese ? CHINESE_WORDING : ENGLISH_WORDING);

    useEffect(() => {
        setExperiences(workExperiences?.length ? workExperiences : [new WorkExperience()]);
    }, [workExperiences]);

    const updateExperience = (experience: WorkExperience) => {
        const newExperiences = experiences.map((value) => (value.id === experience.id ? experience : value));

        const callback =
            lng === LanguageType.Chinese
                ? () => updateChineseWorkExperiences(newExperiences)
                : () => updateEnglishWorkExperiences(newExperiences);

        dispatch(callback());
    };

    const onAddNewExperience = () => {
        setExperiences((prev) => prev.concat(new WorkExperience()));
    };

    const onRemoveExperience = (id?: string) => {
        id && setExperiences((prev) => prev.filter((v) => v.id !== id));
    };

    return (
        <Container>
            {experiences?.map((experience) => (
                <WorkExperienceCard
                    key={experience.id}
                    onPlus={onAddNewExperience}
                    onMinus={() => onRemoveExperience(experience.id)}
                >
                    <ExperienceForm
                        experience={experience}
                        rowText={rowText}
                        update={updateExperience}
                    ></ExperienceForm>
                </WorkExperienceCard>
            ))}
        </Container>
    );
}

export default WorkExperienceForm;
