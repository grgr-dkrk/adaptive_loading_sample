import { ConnectionEffectiveType } from "~/types";

export function setEffectiveImage(type: ConnectionEffectiveType): string {
  switch(type) {
    case '2g':
      return '2g向け'
    case '3g':
      return '3g向け'
    case '4g':
      return '4g向け'
    case '5g':
      return '5g向け'
    default:
      return '';
  }
}