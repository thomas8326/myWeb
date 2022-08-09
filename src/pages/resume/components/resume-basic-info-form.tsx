import { FromField } from 'src/components/forms/form-field';
import { FormTextarea } from 'src/components/forms/form-textarea';
import { useFormGroup } from 'src/hooks/useForm';
import { RaisedButton } from 'src/styles/components/button';
import { FormControl, FormGroup } from 'src/models/form';
import { useAppDispatch } from 'src/reducers/storage';
import { BasicInfo, LanguageType } from 'src/models/resume';
import { useEffect, useState } from 'react';
import { updateChineseBasicInfo, updateEnglishBasicInfo } from 'src/reducers/resume-slice';

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
    const { controls, values, fetchValues, changeHandler } = useFormGroup<BasicInfo>(
        new FormGroup({
            aboutMe: new FormControl(''),
        }),
    );
    const [rowText] = useState(lng === LanguageType.Chinese ? CHINESE_WORDING : ENGLISH_WORDING);

    useEffect(() => {
        if (basicInfo) {
            fetchValues(basicInfo);
        }
    }, [basicInfo]);

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
                <FormTextarea
                    name="aboutMe"
                    value={controls['aboutMe'].controls}
                    callback={changeHandler}
                ></FormTextarea>
            </FromField>
            <div className="btn-group">
                <RaisedButton onClick={onUpdateBasicInfo}>{rowText.Update}</RaisedButton>
            </div>
        </>
    );
}

export default BasicInfoForm;
