// Reexport the native module. On web, it will be resolved to ExpoDeviceCornerRadiusModule.web.ts
// and on native platforms to ExpoDeviceCornerRadiusModule.ts
export { default } from './ExpoDeviceCornerRadiusModule';
export { default as ExpoDeviceCornerRadiusView } from './ExpoDeviceCornerRadiusView';
export * from  './ExpoDeviceCornerRadius.types';
