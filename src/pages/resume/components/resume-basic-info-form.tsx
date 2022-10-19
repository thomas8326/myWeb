import { FromField } from 'src/components/forms/form-field';
import { FormTextarea } from 'src/components/forms/form-textarea';
import { ButtonGroup, RaisedButton } from 'src/styles/components/button';
import { useAppDispatch } from 'src/reducers/storage';
import { BasicInfo, LanguageType } from 'src/models/resume';
import { useState } from 'react';
import { updateChineseBasicInfo, updateEnglishBasicInfo } from 'src/reducers/resume-slice';
import { useForm } from 'src/components/forms/form';
import { FormInput } from 'src/components/forms/form-input';
import { FlexRowLayout } from 'src/styles/layouts/flex-layout';

interface BasicInfoProps {
    lng?: LanguageType;
    basicInfo: BasicInfo | undefined;
}

const CHINESE_WORDING = {
    Name: '姓名',
    Phone: '電話',
    Email: '信箱',
    Summary: '職涯摘要',
    AboutMe: '關於我',
    Update: '更新',
};

const ENGLISH_WORDING = {
    Name: 'Name',
    Phone: 'Phone',
    Email: 'Email',
    Summary: 'Career Summary',
    AboutMe: 'About Me',
    Update: 'Update',
};

const INIT_BASIC: BasicInfo = {
    name: '',
    phone: '',
    email: '',
    summary: '',
    aboutMe: '',
};

function BasicInfoForm(props: BasicInfoProps) {
    const { basicInfo, lng } = props;
    const dispatch = useAppDispatch();
    const { values, handleChange } = useForm<BasicInfo>({ initialValues: basicInfo || INIT_BASIC });
    const [rowText] = useState(lng === LanguageType.Chinese ? CHINESE_WORDING : ENGLISH_WORDING);

    const onUpdateBasicInfo = () => {
        if (values) {
            const callback =
                lng === LanguageType.Chinese
                    ? () => updateChineseBasicInfo(values)
                    : () => updateEnglishBasicInfo(values);

            dispatch(callback());
        }
    };

    return (
        <>
            <FlexRowLayout elementsMargin="8px" marginBottom="10px">
                <FromField fieldName={rowText.Name} cssConfig={{ height: `${60}px` }} isTranslate={false}>
                    <FormInput name="name" value={values.name} callback={handleChange}></FormInput>
                </FromField>
                <FromField fieldName={rowText.Phone} cssConfig={{ height: `${60}px` }} isTranslate={false}>
                    <FormInput name="phone" value={values.phone} callback={handleChange}></FormInput>
                </FromField>
                <FromField fieldName={rowText.Email} cssConfig={{ height: `${60}px` }} isTranslate={false}>
                    <FormInput name="email" value={values.email} callback={handleChange}></FormInput>
                </FromField>
            </FlexRowLayout>
            <FromField fieldName={rowText.Summary} cssConfig={{ height: `${140}px` }} isTranslate={false}>
                <FormTextarea name="summary" value={values.summary} callback={handleChange}></FormTextarea>
            </FromField>
            <FromField fieldName={rowText.AboutMe} cssConfig={{ minHeight: `${140}px` }} isTranslate={false}>
                <FormTextarea name="aboutMe" value={values.aboutMe} callback={handleChange}></FormTextarea>
            </FromField>
            <ButtonGroup position="end">
                <RaisedButton onClick={onUpdateBasicInfo}>{rowText.Update}</RaisedButton>
            </ButtonGroup>
        </>
    );
}

export default BasicInfoForm;
