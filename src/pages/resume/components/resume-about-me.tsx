import { FromField } from 'src/components/forms/form-field';
import { FormTextarea } from 'src/components/forms/form-textarea';
import { TransKey } from 'src/enums/translation-key.enum';
import { useForm } from 'src/hooks/useForm';
import { RaisedButton } from 'src/styles/components/button';
import { FormControl } from 'src/models/form-control';
import { useAppDispatch } from 'src/reducers/storage';
import { BasicInfo, LanguageType } from 'src/models/resume';
import { useEffect } from 'react';
import { updateChineseBasicInfo, updateEnglishBasicInfo } from 'src/reducers/resume-slice';

interface BasicInfoProps {
    lng: LanguageType;
    basicInfo: BasicInfo | undefined;
}

function BasicInfoForm(props: BasicInfoProps) {
    const { basicInfo } = props;
    const dispatch = useAppDispatch();
    const { controls, values, fetchValues, changeHandler } = useForm<BasicInfo>({
        aboutMe: new FormControl(basicInfo?.aboutMe || ''),
    });

    useEffect(() => {
        if (basicInfo) {
            fetchValues(basicInfo);
        }
    }, [basicInfo]);

    const onUpdateBasicInfo = () => {
        if (values) {
            const callback =
                props.lng === LanguageType.Chinese
                    ? () => updateChineseBasicInfo(values)
                    : () => updateEnglishBasicInfo(values);

            dispatch(callback());
        }
    };

    return (
        <>
            <FromField fieldName={TransKey.AboutMe} cssConfig={{ minHeight: `${140}px` }}>
                <FormTextarea name="aboutMe" value={controls['aboutMe'].value} callback={changeHandler}></FormTextarea>
            </FromField>
            <div className="btn-group">
                <RaisedButton onClick={onUpdateBasicInfo}>{TransKey.Update}</RaisedButton>
            </div>
        </>
    );
}

export default BasicInfoForm;
