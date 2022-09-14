import { isEmpty, isNil } from 'ramda';
import React, { useCallback, useReducer, useRef } from 'react';

const setIn = (obj: {}, path: string, value: any) => {
    const newPath = path.split(/[\[\]\.]/).filter(v => !isEmpty(v));
    const currentObj = JSON.parse(JSON.stringify(obj));

    const fieldName = newPath[0];
    const index = Number(newPath[1]);
    const property = newPath[2];


    if (isNil(fieldName)) {
        throw new Error("Error: Can not found the fieldName of form");
    }

    if (isNil(index) || isNaN(index)) {
        currentObj[fieldName] = value;
    } else if (isNil(property)) {
        currentObj[fieldName][index] = value;
    } else {
        currentObj[fieldName][index][property] = value;
    }

    return currentObj;
};

type FormValues = Record<string, any>;

type FormMessage<FormValues> =
    | { type: 'SET_VALUES'; payload: FormValues }
    | { type: 'SET_FIELD_VALUE'; payload: { field: string; value?: any } }
    | { type: 'UPDATE_FIELDS' };


interface FormState<FormValues> {
    /** Form values */
    values: FormValues;
}

interface FormProps {
    initialValues: FormValues;
}

interface FormReturn<T> {
    values: T;
    initialValues: FormValues,
    handleChange: (event: React.ChangeEvent<any>) => void,
    updateFields: () => void,
}

export const useForm = <T>(props: FormProps): FormReturn<T> => {
    const initialValues = useRef(props.initialValues);

    const formReducer = (state: FormState<FormValues>, msg: FormMessage<FormValues>) => {
        switch (msg.type) {
            case 'SET_VALUES':
                return { ...state, values: msg.payload };
            case 'SET_FIELD_VALUE':
                return { ...state, values: setIn(state.values, msg.payload.field, msg.payload.value) };
            case 'UPDATE_FIELDS':
                console.log("UPDATE_FIELDS", state.values);
                return { ...state, values: state.values };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(formReducer, {
        values: props.initialValues,
    } as { values: typeof props.initialValues });

    const setFieldValue = useCallback((field: string, value: any) => {
        dispatch({
            type: 'SET_FIELD_VALUE',
            payload: {
                field,
                value,
            },
        });
    }, []);

    const handleChange = useCallback(
        (event: React.ChangeEvent<any>) => {
            const target = event.target;

            const { type, name, id, value, checked, outerHTML, options, multiple } = target;

            const field = name ? name : id;

            let parsed;

            // TODO:
            // 1. /checkbox/.test(type) // checkboxes
            // 2. options && multiple
            const currentVal = /number|range/.test(type)
                ? ((parsed = parseFloat(value)), isNaN(parsed) ? '' : parsed)
                : value;

            if (field) {
                setFieldValue(field, currentVal);
            }
        },
        [setFieldValue],
    );

    const updateFields = () => {
        dispatch({
            type: 'UPDATE_FIELDS',
        });
    }

    return {
        ...state,
        initialValues: initialValues.current,
        handleChange,
        updateFields
    };
};
