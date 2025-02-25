import { css } from "lit";

export const styles = css`
  :host {
    display: block;
    /* padding: 16px; */
  }
  h2 {
    margin: 0;
    display: flex;
    align-items: center;
    font-weight: 500;
    &.icon-right {
      flex-direction: row-reverse;
      justify-content: flex-end;
      > ha-icon {
        margin-left: 8px;
      }
    }
    &.icon-left {
      flex-direction: row;
      justify-content: flex-start;
      > ha-icon {
        margin-right: 8px;
      }
    }
  }
  h3 {
    margin: 0 8px 0 16px;
    display: flex;
    align-items: center;
    font-weight: 400;
    &.icon-right {
      flex-direction: row-reverse;
      justify-content: flex-end;
      > ha-icon {
        margin-left: 8px;
      }
    }
    &.icon-left {
      flex-direction: row;
      justify-content: flex-start;
      > ha-icon {
        margin-right: 8px;
      }
    }
  }
  ha-card {
    overflow: hidden;
    /* padding: 16px; */
    border-radius: var(--ha-card-border-radius, 12px);
    box-shadow: var(--ha-card-box-shadow, 0px 2px 4px rgba(0, 0, 0, 0.1));
  }
  .card-content {
    display: flex;
    flex-direction: column;
  }
  .floor {
    gap: 8px;
    display: flex;
    flex-direction: column;
    /* margin-bottom: 24px; */
  }
  .area {
    /* margin: 8px 0; */
    display: flex;
    align-items: center;
    &.entity-icons-right {
      justify-content: space-between;
    }
    &.entity-icons-left {
      justify-content: flex-start;
    }
  }
  .entities {
    display: flex;
    flex-wrap: nowrap;
    gap: 0.5em;
  }
  .entity-card-button {
    border-radius: 50%;
    --mdc-icon-button-size: 36px;
  }
  .entity-card-button ha-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    --mdc-icon-size: 0.9em;
  }
`;
