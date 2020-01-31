
# react-native-dynamic-font

## Getting started

`$ npm install react-native-dynamic-font --save`

### Mostly automatic installation

`$ react-native link react-native-dynamic-font`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-dynamic-font` and add `ReactNativeDynamicFont.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libReactNativeDynamicFont.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.ashrithks.dynamicfont.ReactNativeDynamicFontPackage;` to the imports at the top of the file
  - Add `new ReactNativeDynamicFontPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-dynamic-font'
  	project(':react-native-dynamic-font').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-dynamic-font/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-dynamic-font')
  	```


## Usage
```javascript
import ReactNativeDynamicFont from 'react-native-dynamic-font';

// TODO: What to do with the module?
ReactNativeDynamicFont;
```
  