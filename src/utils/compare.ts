export type PrimitiveType = string | number | boolean | BigInt;


export function isNil(value: any): value is undefined | null {
    return value === undefined || value === null;
}

export function isNotNil<T>(value: T | PrimitiveType): value is NonNullable<T | PrimitiveType> {
    return !isNil(value);
}
