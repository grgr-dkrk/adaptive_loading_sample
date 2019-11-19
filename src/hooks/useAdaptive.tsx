import * as React from 'react';
import {
  GetConnectionEffective,
  GetConnectionSaveData,
} from '~/functions/getConnectionParams';
import { GetDeviceMemory } from '~/functions/getDeviceParams';
import { GetHardwareConcurrency } from '~/functions/getHardwareParams';
import { setEffectiveImage } from '~/functions/setEffectiveInage';

type State = {
  effectiveType: ReturnType<typeof GetConnectionEffective> | '';
  effectiveImage: string;
  saveData: ReturnType<typeof GetConnectionSaveData>;
  deviceMemory: ReturnType<typeof GetDeviceMemory>;
  hardwareConcurrency: ReturnType<typeof GetHardwareConcurrency>;
};

export const useAdaptive = () => {
  const [state, setState] = React.useState<State>({
    effectiveType: '',
    saveData: false,
    deviceMemory: '',
    effectiveImage: '',
    hardwareConcurrency: 0
  });

  React.useEffect(() => {
    const effectiveType = GetConnectionEffective();
    const effectiveImage = setEffectiveImage(effectiveType);
    const saveData = GetConnectionSaveData();
    const deviceMemory = GetDeviceMemory();
    const hardwareConcurrency = GetHardwareConcurrency();
    setState({
      ...state,
      effectiveType,
      effectiveImage,
      saveData,
      deviceMemory,
      hardwareConcurrency
    });
  }, []);

  return state;
};
