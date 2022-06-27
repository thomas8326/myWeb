
import { useState } from "react";
import { FromControl } from "src/models/form";

export function useForm(initialState: { [key: string]: FromControl<any> } = {}) {
    const [controls, setControls] = useState(initialState);
    const [values, setValues] = useState<object>();
    const [isValid, setValid] = useState(false);
    const [isDirty, setIsDirty] = useState(false);

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
        let newValues = {}
        for (const [key, control] of Object.entries(newControls)) {
            newValues = { ...newValues, [key]: control.getValue() };
        }
        setControls(newControls);
        setValues(newValues);
        setValid(isValid);
    };
    return { controls, values, changeHandler, isValid };
}

export const validatorRequired = (value: string) => {
    return { name: 'required', valid: !!value && value.trim().length > 0 };
}
