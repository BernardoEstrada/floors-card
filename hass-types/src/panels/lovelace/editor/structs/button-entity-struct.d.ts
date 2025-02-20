export declare const buttonEntityConfigStruct: import("superstruct").Struct<{
    image: string;
    name: string;
    icon: string;
    entity: string;
    show_icon: boolean;
    show_name: boolean;
    double_tap_action?: any;
    hold_action?: any;
    tap_action?: any;
}, {
    entity: import("superstruct").Struct<string, null>;
    name: import("superstruct").Struct<string, null>;
    icon: import("superstruct").Struct<string, null>;
    image: import("superstruct").Struct<string, null>;
    show_name: import("superstruct").Struct<boolean, null>;
    show_icon: import("superstruct").Struct<boolean, null>;
    tap_action: import("superstruct").Struct<any, null>;
    hold_action: import("superstruct").Struct<any, null>;
    double_tap_action: import("superstruct").Struct<any, null>;
}>;
