export declare const pictureHeaderFooterConfigStruct: import("superstruct").Struct<{
    image: string;
    type: string;
    alt_text: string;
    double_tap_action?: any;
    hold_action?: any;
    tap_action?: any;
}, {
    type: import("superstruct").Struct<string, null>;
    image: import("superstruct").Struct<string, null>;
    tap_action: import("superstruct").Struct<any, null>;
    hold_action: import("superstruct").Struct<any, null>;
    double_tap_action: import("superstruct").Struct<any, null>;
    alt_text: import("superstruct").Struct<string, null>;
}>;
export declare const buttonsHeaderFooterConfigStruct: import("superstruct").Struct<{
    entities: {
        image: string;
        name: string;
        icon: string;
        entity: string;
        show_icon: boolean;
        show_name: boolean;
        double_tap_action?: any;
        hold_action?: any;
        tap_action?: any;
    }[];
    type: string;
}, {
    type: import("superstruct").Struct<string, null>;
    entities: import("superstruct").Struct<{
        image: string;
        name: string;
        icon: string;
        entity: string;
        show_icon: boolean;
        show_name: boolean;
        double_tap_action?: any;
        hold_action?: any;
        tap_action?: any;
    }[], import("superstruct").Struct<{
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
    }>>;
}>;
export declare const graphHeaderFooterConfigStruct: import("superstruct").Struct<{
    type: string;
    entity: string;
    detail: number;
    hours_to_show: number;
}, {
    type: import("superstruct").Struct<string, null>;
    entity: import("superstruct").Struct<string, null>;
    detail: import("superstruct").Struct<number, null>;
    hours_to_show: import("superstruct").Struct<number, null>;
}>;
export declare const headerFooterConfigStructs: import("superstruct").Struct<any, null>;
