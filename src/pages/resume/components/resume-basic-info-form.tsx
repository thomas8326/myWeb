import { FromField } from 'src/components/forms/form-field';
import { FormTextarea } from 'src/components/forms/form-textarea';
import { useFormGroup } from 'src/hooks/useForm';
import { ButtonGroup, RaisedButton } from 'src/styles/components/button';
import { FormControl, FormGroup } from 'src/models/form';
import { useAppDispatch } from 'src/reducers/storage';
import { BasicInfo, LanguageType } from 'src/models/resume';
import { useEffect, useState } from 'react';
import { updateChineseBasicInfo, updateEnglishBasicInfo } from 'src/reducers/resume-slice';
import { useForm } from 'src/components/forms/form';

interface BasicInfoProps {
    lng?: LanguageType;
    basicInfo: BasicInfo | undefined;
}

const CHINESE_WORDING = {
    AboutMe: '關於我',
    Update: '更新',
};

const ENGLISH_WORDING = {
    AboutMe: 'About Me',
    Update: 'Update',
};

function BasicInfoForm(props: BasicInfoProps) {
    const { basicInfo, lng } = props;
    const dispatch = useAppDispatch();
    const { values, handleChange } = useForm<BasicInfo>({ initialValues: basicInfo || { aboutMe: '' } });
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
