import { useRef, useState } from 'react';
import { ref, getDatabase, child, set, push } from 'firebase/database';
import { firebaseApp } from 'src/firebase/config';

export function http<T extends { id?: string }>() {
    const realtimeDB = getDatabase(firebaseApp);

    const post = async <U extends T>(object: U, path: string) => {
        return new Promise<U>((resolve) => {
            debugger;
            console.log(object);
            set(ref(realtimeDB, path), object).then(() => { debugger; console.log(object); resolve(object) }).catch(e => console.log(e));
        });
    };

    const add = async <U extends T>(object: U, path: string) => {
        return new Promise<U>(async (resolve) => {
            push(ref(realtimeDB, path), object).then(() => resolve(object));
        });
    };

    return { post, add };
}

http.post = function (endpoint: string, body?: any) {
    return http().post(body, endpoint);
};

http.add = function (endpoint: string, body?: any) {
    return http().add(body, endpoint);
};
