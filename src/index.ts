import ExpoDeviceCornerRadiusModule from "./ExpoDeviceCornerRadiusModule";

export * from "./ExpoDeviceCornerRadius.types";

export function getCornerRadius(): number {
  return ExpoDeviceCornerRadiusModule.getCornerRadius();
}
