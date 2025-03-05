import type { InternalPropertyDeclaration } from "lit/decorators";
export declare const storage: (options: {
    key?: string;
    storage?: "localStorage" | "sessionStorage";
    subscribe?: boolean;
    state?: boolean;
    stateOptions?: InternalPropertyDeclaration;
    serializer?: (value: any) => any;
    deserializer?: (value: any) => any;
}) => any;
