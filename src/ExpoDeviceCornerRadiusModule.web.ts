import { NativeModule, registerWebModule } from "expo";

import { ExpoDeviceCornerRadiusModuleEvents } from "./ExpoDeviceCornerRadius.types";

class ExpoDeviceCornerRadiusModule extends NativeModule<ExpoDeviceCornerRadiusModuleEvents> {
  getCornerRadius() {
    return 0;
  }
}

export default registerWebModule(
  ExpoDeviceCornerRadiusModule,
  "ExpoDeviceCornerRadiusModule"
);
