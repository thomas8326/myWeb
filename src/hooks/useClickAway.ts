
import { RefObject, useEffect } from "react";

// Not handle Shadow DOM
export const useClickAway = (ref: RefObject<any>, callback: () => void, events: string[] = ["mousedown"]) => {
    useEffect(() => {
        const handler = (event: Event) => {
            const { current: el } = ref;
            el && !el.contains(event.target) && callback();
        }

        for (const eventName of events) {
            document.addEventListener(eventName, handler);
        }

        return () => {
            for (const eventName of events) {
                document.removeEventListener(eventName, handler);
            }
        }
    }, [events, ref]);

}
