import { createContext, ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { ClientStorage } from 'src/models/client-storage';
import { LanguageType } from 'src/models/resume';

interface ContextState {
    clientStorage: ClientStorage | null;
    getLanguage: LanguageType;
    setLocalStorage: (key: keyof ClientStorage, value: any) => void;
}

export const ClientStorageContext = createContext<ContextState>({} as ContextState);

export const ClientStorageProvider = (props: { children: ReactElement }) => {
    const [clientStorage, setClientStorage] = useState<ClientStorage>({
        language: localStorage.getItem('language') || 'en',
    });

    const setLocalStorage = (key: keyof ClientStorage, value: any) => {
        localStorage.setItem(key, value);
        setClientStorage({ [key]: value });
    };

    const language = useMemo(() => {
        switch (clientStorage.language) {
            case 'zh_tw':
                return LanguageType.Chinese;
            case 'en':
            default:
                return LanguageType.English;
        }
    }, [clientStorage]);

    return (
        <ClientStorageContext.Provider value={{ setLocalStorage, clientStorage, getLanguage: language }} {...props}>
            {props.children}
        </ClientStorageContext.Provider>
    );
};
