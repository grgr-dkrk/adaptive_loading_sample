import { LABEL } from "~/constants";

export function GetDeviceMemory(): number | string {
  // @ts-ignore
  return navigator.deviceMemory ? navigator.deviceMemory : LABEL.NOT_SUPPORT;
}