import { push, ref, set, get as apiGet } from 'firebase/database';
import { realtimeDB } from 'src/firebase/config';

export function http<T extends { id?: string }>() {
    const get = async <U extends T>(path: string) => {
        return new Promise<U>((resolve, reject) => {
            apiGet(ref(realtimeDB, path)).then((snapshot) => {
                if (snapshot.exists()) {
                    resolve(JSON.parse(JSON.stringify(snapshot.val())));
                } else {
                    reject('No data available');
                }
            })
        });
    }

    const post = async <U extends T>(object: U, path: string) => {
        return new Promise<U>((resolve) => {
            set(ref(realtimeDB, path), object).then(() => { resolve(object) }).catch(e => console.log(e));
        });
    };

    const add = async <U extends T>(object: U, path: string) => {
        return new Promise<U>(async (resolve) => {
            push(ref(realtimeDB, path), object).then(() => resolve(object));
        });
    };

    return { get, post, add };
}

http.post = <T>(endpoint: string, body?: any) => {
    return http().post<T>(body, endpoint);
};

http.add = <T>(endpoint: string, body?: any) => {
    return http().add<T>(body, endpoint);
};

http.get = <T>(endpoint: string) => {
    return http().get<T>(endpoint);
};
