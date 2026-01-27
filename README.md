# expo-device-corner-radius

A simple expo module to get the corner radius of the Device without using any iOS Private APIs.

On iOS, this uses a lookup table for all iPhones (up to date as of the iPhone 17 Series)
On Android, each corner can have it's own radius, so this takes the smallest of the 4.

# Usage

```ts
import {getCornerRadius} from 'expo-device-corner-radius'

// ...

const cornerRadius = getCornerRadius()
```


# Installation in managed Expo projects

```
npx expo install expo-device-corner-radius
```

# Installation in bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

### Add the package to your npm dependencies

```
npm install expo-device-corner-radius
```

### Configure for Android

No extra setup is needed

### Configure for iOS

Run `npx pod-install` after installing the npm package.
