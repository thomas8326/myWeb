import { KeyboardEvent } from 'react';

const useEnterKey = (enterFunction: () => void) => (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    enterFunction();
  }
};

export default useEnterKey;
