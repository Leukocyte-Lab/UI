import type { WatchOptionsBase } from 'vue';
import type { EventCallback } from '../../shared/types/callback';
export type EventSignalOptions = {
    debounce?: number;
    flush?: WatchOptionsBase['flush'];
    syncWithDebounce?: boolean;
};
export declare const useEventDebounceSignal: <E extends Event>(callback?: EventCallback<E>, { debounce, flush, syncWithDebounce }?: EventSignalOptions) => {
    triggered: import("../../shared/libs/signal").Signal<boolean>;
    onTrigger: (event: E) => void;
};
