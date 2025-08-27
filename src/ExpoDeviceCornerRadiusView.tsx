import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoDeviceCornerRadiusViewProps } from './ExpoDeviceCornerRadius.types';

const NativeView: React.ComponentType<ExpoDeviceCornerRadiusViewProps> =
  requireNativeView('ExpoDeviceCornerRadius');

export default function ExpoDeviceCornerRadiusView(props: ExpoDeviceCornerRadiusViewProps) {
  return <NativeView {...props} />;
}
