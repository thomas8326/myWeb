export class FromControl<T> {
    value: T;
    validations: { (value: string): { name: string; valid: boolean } }[];
    error: { [key: string]: boolean } = {};
    valid: boolean = false;
    isDirty: boolean = false;

    constructor(value: T, validations?: { (value: any): { name: string; valid: boolean } }[]) {
        this.value = value;
        this.validations = validations || [];
    }

    setValue(value: T) {
        this.value = value;
    }

    getValue() {
        return this.value;
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
