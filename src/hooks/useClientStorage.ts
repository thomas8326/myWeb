import { useContext } from "react";
import { ClientStorageContext } from "src/contexts/client-storage";

const useClientStorage = () => {
    const context = useContext(ClientStorageContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }

    return context;
}

export default useClientStorage;
