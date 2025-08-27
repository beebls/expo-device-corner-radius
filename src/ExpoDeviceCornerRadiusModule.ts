import { NativeModule, requireNativeModule } from 'expo';

import { ExpoDeviceCornerRadiusModuleEvents } from './ExpoDeviceCornerRadius.types';

declare class ExpoDeviceCornerRadiusModule extends NativeModule<ExpoDeviceCornerRadiusModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoDeviceCornerRadiusModule>('ExpoDeviceCornerRadius');
