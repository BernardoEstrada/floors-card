import type { HassEntities } from "home-assistant-js-websocket";
import type { GroupEntity } from "../../data/group";
export declare const getViewEntities: (entities: HassEntities, view: GroupEntity) => HassEntities;
