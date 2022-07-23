
import { useState } from "react";
import { FromControl } from "src/models/form";

export function useForm<T extends {}>(initialState: { [key: string]: FromControl<any> } = {}) {
    const [controls, setControls] = useState(initialState);
    const [values, setValues] = useState<T | null>(null);
    const [isValid, setValid] = useState(false);
    const [isDirty, setIsDirty] = useState(false);

    const fetchValues = (values: T) => {
        let newControls = {};
        let newValues: T = {} as T;
        for (const [key, value] of Object.entries(values)) {
            newControls = { ...newControls, [key]: new FromControl(value) };
            newValues = { ...newValues, [key]: value };
        }
        setControls(newControls);
        setValues(newValues);
    }

    const validate = (values: { [key: string]: FromControl<any> }) => {
        const error = Object.values(values).filter(value => {
            value.validations.forEach(validator => {
                const { name, valid } = validator(value.getValue());
                value.setError(name, !valid);
            });

            return value.isError();
        });

        return { isValid: error.length === 0 };
    }

    const changeHandler = (event: { name: string, value: any }) => {
        const currentValue = controls;
        const controlName = event.name;
        currentValue[controlName].setValue(event.value);
        currentValue[controlName].setDirty();
        const { isValid } = validate(currentValue);
        const newControls = { ...controls, [controlName]: currentValue[controlName] };
        let newValues: T = {} as T;
        for (const [key, control] of Object.entries(newControls)) {
            newValues = { ...newValues, [key]: control.getValue() };
        }
        setControls(newControls);
        setValues(newValues);
        setValid(isValid);
    };
    return { controls, values, changeHandler, fetchValues, isValid };
}

export const validatorRequired = (value: string) => {
    return { name: 'required', valid: !!value && value.trim().length > 0 };
}
