
import { useEffect, useState } from "react";
import { FormControl, FormArray, FormCallback, FormGroup } from "src/models/form";
import { isNotNil } from "src/utils/compare";

export function useFormGroup<T extends {}>(initialState: FormGroup) {
    const [controls, setControls] = useState(initialState.controls);
    const [values, setValues] = useState<T | null>(null);
    const [isValid, setValid] = useState(false);
    const [isDirty, setIsDirty] = useState(false);

    const fetchValues = (values: T) => {
        let newControls = {};
        let newValues: T = {} as T;
        for (const [key, value] of Object.entries(values)) {
            newControls = { ...newControls, [key]: new FormControl(value) };
            newValues = { ...newValues, [key]: value };
        }
        setControls(newControls);
        setValues(newValues);
    }

    const validate = (values: Record<string, FormControl<any>>) => {
        const error = Object.values(values).filter(value => {
            value.validations.forEach(validator => {
                const { name, valid } = validator(value.getValue());
                value.setError(name, !valid);
            });

            return value.isError();
        });

        return { isValid: error.length === 0 };
    }

    const changeHandler = (event: FormCallback) => {
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

export function useFormArray<T extends {}>(initialState: FormArray) {
    const [controls, setControls] = useState(initialState.controls);
    const [values, setValues] = useState<T[]>([]);

    useEffect(() => {
        let newValues: T = {} as T;
        for (const [key, control] of Object.entries(initialState.controls[0])) {
            newValues = { ...newValues, [key]: control.getValue() }
        }
        setValues([newValues]);
    }, []);

    const fetchValues = (values: T[]) => {
        for (let i = 0; i < values.length; i++) {
            let newControls = {};
            let newValues: T = {} as T;
            for (const [key, value] of Object.entries(values)) {
                newControls = { ...newControls, [key]: new FormControl(value) };
                newValues = { ...newValues, [key]: value };
            }
            setControls(controls => controls.concat(newControls));
            setValues(values => values.concat(newValues))
        }
    }

    const handler = (event: FormCallback) => {
        if (isNotNil(event.index)) {
            const currentValue = controls;
            const controlIdx = event.index;
            const controlName = event.name;

            // Update Control
            currentValue[controlIdx][controlName].setValue(event.value);
            currentValue[controlIdx][controlName].setDirty();

            // Update Value
            (values[controlIdx] as { [key: string]: any })[controlName] = event.value;

            currentValue[controlIdx][controlName].validations.forEach(validator => {
                const { name, valid } = validator(currentValue[controlIdx][controlName].getValue());
                currentValue[controlIdx][controlName].setError(name, !valid);
            });

            setControls(controls);
            setValues(values);
        }
    };

    const add = (formArray: FormArray) => {
        setControls(controls => [...controls, ...formArray.controls]);
    }

    const remove = (at: number) => {
        setControls(prev => {
            console.log(at);
            return prev.filter((_, index) => index !== at)
        });
    }

    return { controls, values, handler, add, remove, fetchValues }
}

export const validatorRequired = (value: string) => {
    return { name: 'required', valid: !!value && value.trim().length > 0 };
}
