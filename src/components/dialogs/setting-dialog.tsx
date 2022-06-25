import { Trans, useTranslation } from 'react-i18next';
import { Dialog, DialogContent, DialogHeader } from 'src/contexts/modal';
import { FromField } from 'src/components/forms/form-field';
import { FormSelection } from 'src/components/forms/form-selection';
import { Languages } from 'src/constants/lists';
import { TransKey } from 'src/enums/translation-key.enum';
import useClientStorage from 'src/hooks/useClientStorage';

function SettingDialog() {
    const { i18n } = useTranslation();
    const { setLocalStorage } = useClientStorage();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        setLocalStorage('language', language);
    };

    return (
        <Dialog width="300" height="300">
            <DialogHeader>
                <Trans>{TransKey.Setting}</Trans>
            </DialogHeader>
            <DialogContent>
                <FromField fieldName={TransKey.Language}>
                    <FormSelection
                        defaultOption={i18n.language}
                        options={Languages}
                        callback={(e: string) => changeLanguage(e)}
                    />
                </FromField>
            </DialogContent>
        </Dialog>
    );
}

export default SettingDialog;
