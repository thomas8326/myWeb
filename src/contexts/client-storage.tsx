import { createContext, ReactElement, useCallback, useEffect, useState } from 'react';
import { ClientStorage } from 'src/models/client-storage';

interface ContextState {
    clientStorage: ClientStorage | null;
    setLocalStorage: (key: keyof ClientStorage, value: any) => void;
}

export const ClientStorageContext = createContext({} as ContextState);

export const ClientStorageProvider = (props: { children: ReactElement }) => {
    const [clientStorage, setClientStorage] = useState<ClientStorage>({
        language: localStorage.getItem('language') || 'en',
    });

    const setLocalStorage = (key: keyof ClientStorage, value: any) => {
        localStorage.setItem(key, value);
        setClientStorage({ [key]: value });
    };

    return (
        <ClientStorageContext.Provider value={{ setLocalStorage, clientStorage }} {...props}>
            {props.children}
        </ClientStorageContext.Provider>
    );
};
