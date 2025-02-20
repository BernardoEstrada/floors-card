export declare const actionConfigStructConfirmation: import("superstruct").Struct<boolean | {
    text: string;
    excemptions: {
        user: string;
    }[];
}, null>;
export declare const actionConfigStructType: import("superstruct").Struct<{
    action: "url" | "toggle" | "assist" | "none" | "call-service" | "perform-action" | "more-info" | "navigate";
    confirmation: boolean | {
        text: string;
        excemptions: {
            user: string;
        }[];
    };
}, {
    action: import("superstruct").Struct<"url" | "toggle" | "assist" | "none" | "call-service" | "perform-action" | "more-info" | "navigate", {
        url: "url";
        toggle: "toggle";
        assist: "assist";
        none: "none";
        "call-service": "call-service";
        "perform-action": "perform-action";
        "more-info": "more-info";
        navigate: "navigate";
    }>;
    confirmation: import("superstruct").Struct<boolean | {
        text: string;
        excemptions: {
            user: string;
        }[];
    }, null>;
}>;
export declare const actionConfigStruct: import("superstruct").Struct<any, null>;
