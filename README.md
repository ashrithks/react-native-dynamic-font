
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

### Example of how to use

To load a font dynamically, you must first have a base64 string of your font file (TTF or OTF):
```javascript
import { loadFont, loadFonts } from 'react-native-dynamic-font';

...
/* Load a single font */
loadFont('nameOfFont', base64FontString, 'ttf').then(function(name) {
	console.log('Loaded font successfully. Font name is: ', name);
});

/* Load a list of fonts */
loadFonts([{name: 'nameOfFont', data: base64FontString, type: 'ttf'}]).then(function(names) {
	console.log('Loaded all fonts successfully. Font names are: ', names);
});

...

```

#### Font loading using file path
You can download font file to file system and then load it to app without sending base64 to bridge.
 
```javascript
import {loadFontFromFile} from 'react-native-dynamic-font';
import RNFetchBlob from 'rn-fetch-blob'

const fontFilePath = RNFetchBlob.fs.dirs.DocumentDir + "fonts/roboto.ttf";

loadFontFromFile("Roboto",  fontFilePath)
   .then(function(name) {
   	    console.log('Loaded font successfully. Font name is: ', name);
   });

```

### Options

option | iOS  | Android | Info
------ | ---- | ------- | ----
name | Not used | Used | Specify registered font name (doesn't work for iOS)
data | Used | Used | This can be a data URI or raw base64... if it is raw base64 type must be specified, but defaults to TTF (data URI mime: font/ttf or font/otf)
type | Used | Used | (optional) Specify the type of font in the encoded data (ttf or otf). Defaults to "ttf"

### The Response

The ACTUAL name the font was registered with. Use this for your fontFamily.
  