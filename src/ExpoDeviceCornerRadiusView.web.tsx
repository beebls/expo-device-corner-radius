import * as React from 'react';

import { ExpoDeviceCornerRadiusViewProps } from './ExpoDeviceCornerRadius.types';

export default function ExpoDeviceCornerRadiusView(props: ExpoDeviceCornerRadiusViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
