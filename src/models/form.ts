export class AbstractControl {
    [key: string]: FormControl<any>
}

export interface FormCallback {
    name: string;
    value: string;
    index?: number
};
export class FormGroup {
    controls: AbstractControl;

    constructor(value: AbstractControl) {
        this.controls = value;
    }
}

export class FormArray {
    controls: AbstractControl[] = [];

    constructor(value: AbstractControl) {
        this.controls.push(value);
    }
}

export class FormControl<T> {
    controls: T;
    validations: { (value: string): { name: string; valid: boolean } }[];
    error: { [key: string]: boolean } = {};
    valid: boolean = false;
    isDirty: boolean = false;

    constructor(value: T, validations?: { (value: any): { name: string; valid: boolean } }[]) {
        this.controls = value;
        this.validations = validations || [];
    }

    setValue(value: T) {
        this.controls = value;
    }

    getValue() {
        return this.controls;
    }

    setError(name: string, isError: boolean) {
        this.error[name] = isError;
    }

    hasError(name: string) {
        return this.error[name];
    }

    isError() {
        return Object.values(this.error).some((value) => !!value);
    }

    setDirty() {
        this.isDirty = true;
    }

    getIsDirty() {
        return this.isDirty;
    }
}
