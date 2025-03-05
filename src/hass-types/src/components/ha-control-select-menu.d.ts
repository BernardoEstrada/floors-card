import { SelectBase } from "@material/mwc-select/mwc-select-base";
import "./ha-icon";
import "./ha-ripple";
import "./ha-svg-icon";
export declare class HaControlSelectMenu extends SelectBase {
    protected mdcRoot: HTMLElement;
    protected anchorElement: HTMLDivElement | null;
    showArrow: boolean;
    hideLabel: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private _renderArrow;
    private _renderIcon;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _translationsUpdated;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-control-select-menu": HaControlSelectMenu;
    }
}
