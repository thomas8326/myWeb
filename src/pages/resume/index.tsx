import { TransKey } from 'src/enums/translation-key.enum';
import ResumeFormField from 'src/pages/resume/components/resume-form-field';

function Resume() {
    return (
        <>
            <ResumeFormField title={TransKey.BasicInfo}>
                <div>Test</div>
            </ResumeFormField>
            <ResumeFormField title={TransKey.WorkExperience}>
                <div>Test</div>
            </ResumeFormField>
        </>
    );
}

export default Resume;
