import { KeyboardEvent } from 'react';

const useEnterKey = (enterFunction: (e?: any) => void) => (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    enterFunction();
  }
};

export default useEnterKey;
