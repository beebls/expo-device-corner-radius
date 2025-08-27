import { registerWebModule, NativeModule } from 'expo';

import { ExpoDeviceCornerRadiusModuleEvents } from './ExpoDeviceCornerRadius.types';

class ExpoDeviceCornerRadiusModule extends NativeModule<ExpoDeviceCornerRadiusModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoDeviceCornerRadiusModule, 'ExpoDeviceCornerRadiusModule');
