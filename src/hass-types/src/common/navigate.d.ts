declare global {
    interface HASSDomEvents {
        "location-changed": NavigateOptions;
    }
}
export interface NavigateOptions {
    replace?: boolean;
    data?: any;
}
export declare const navigate: (path: string, options?: NavigateOptions, timestamp?: number) => Promise<boolean>;
