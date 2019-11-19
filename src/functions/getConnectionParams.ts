import { LABEL } from "~/constants";
import { ConnectionEffectiveType } from "~/types";

export function GetConnectionEffective(): ConnectionEffectiveType {
  // @ts-ignore
  return navigator.connection ? navigator.connection.effectiveType : LABEL.NOT_SUPPORT;
}

export function GetConnectionSaveData(): boolean {
  // @ts-ignore
  return navigator.connection ? navigator.connection.saveData : false;
}
