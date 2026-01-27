import { NativeModule, requireNativeModule } from "expo";

import { ExpoDeviceCornerRadiusModuleEvents } from "./ExpoDeviceCornerRadius.types";

declare class ExpoDeviceCornerRadiusModule extends NativeModule<ExpoDeviceCornerRadiusModuleEvents> {
  getCornerRadius(): number;
}
export default requireNativeModule<ExpoDeviceCornerRadiusModule>(
  "ExpoDeviceCornerRadius"
);
