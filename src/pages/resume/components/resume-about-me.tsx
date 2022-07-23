import { FromField } from 'src/components/forms/form-field';
import { FormTextarea } from 'src/components/forms/form-textarea';
import { TransKey } from 'src/enums/translation-key.enum';
import { useForm } from 'src/hooks/useForm';
import { RaisedButton } from 'src/styles/components/button';
import { FormControl } from 'src/models/form-control';
import { useAppDispatch } from 'src/reducers/storage';
import { updateBasicInfo } from 'src/reducers/resume-slice';
import { BasicInfo, LanguageType } from 'src/models/resume';
import { useEffect } from 'react';

interface BasicInfoProps {
    lng: LanguageType;
    basicInfo: BasicInfo | undefined;
}

function BasicInfoForm(props: BasicInfoProps) {
    const dispatch = useAppDispatch();
    const { basicInfo } = props;
    const { controls, values, changeHandler } = useForm<BasicInfo>({
        aboutMe: new FormControl(basicInfo?.aboutMe || ''),
    });

    const onUpdateBasicInfo = () => {
        if (values) {
            dispatch(updateBasicInfo({ lng: props.lng, data: values }));
        }
    };

    useEffect(() => {}, []);

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
