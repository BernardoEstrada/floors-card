export declare const baseTriggerStruct: import("superstruct").Struct<{
    enabled: boolean;
    trigger: string;
    id: string;
}, {
    trigger: import("superstruct").Struct<string, null>;
    id: import("superstruct").Struct<string, null>;
    enabled: import("superstruct").Struct<boolean, null>;
}>;
export declare const forDictStruct: import("superstruct").Struct<{
    days: number;
    seconds: number;
    hours: number;
    minutes: number;
}, {
    days: import("superstruct").Struct<number, null>;
    hours: import("superstruct").Struct<number, null>;
    minutes: import("superstruct").Struct<number, null>;
    seconds: import("superstruct").Struct<number, null>;
}>;
