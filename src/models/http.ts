export interface QueryFn {
    [key: string]: string;
}

export interface HttpResponse {
    status: number;
    data: any;
    headers: Headers;
    url: string;
}

export interface DataResponse<T> {
    status: string;
    error: string;
    loading: boolean;
    data: T;
}
