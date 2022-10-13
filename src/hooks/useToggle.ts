import { isNil } from "ramda";
import { useState } from "react"

export const useToggle = (value: boolean) => {
    const [toggle, setToggle] = useState(value);

    const onToggle = (value?: boolean) => {
        if (isNil(value)) {
            setToggle(prev => !prev);
        } else {
            setToggle(value);
        }
    }

    return [toggle, onToggle] as const;

}
