export declare const entitiesConfigStruct: import("superstruct").Struct<string | {
    image: string;
    name: string;
    icon: string;
    entity: string;
    confirmation: boolean | {
        text: string;
        excemptions: {
            user: string;
        }[];
    };
    format: "time" | "date" | "datetime" | "relative" | "total";
    state_color: boolean;
    secondary_info: string;
    double_tap_action?: any;
    hold_action?: any;
    tap_action?: any;
}, null>;
