import { LABEL } from "~/constants";

export function GetHardwareConcurrency(): number {
  return navigator.hardwareConcurrency || LABEL.NOT_SUPPORT;
}