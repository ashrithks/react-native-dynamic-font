
import { NativeModules } from 'react-native';

const { ReactNativeDynamicFont } = NativeModules;
const loadedFonts = {};

const loadFont = (name, data, type, forceLoad) => {
  /* Check if this font was already loaded */
  if (!forceLoad && loadedFonts[name])
    return Promise.resolve(loadedFonts[name]);

  if (!name)
    throw new Error('Name is a required argument');

  if (!data)
    throw new Error('Data is a required argument');

  /* Load font via native binary code */
  return new Promise(function (resolve, reject) {
    ReactNativeDynamicFont.loadFont({
      name: name,
      data: data,
      type: type
    }, function (err, givenName) {
      if (err) {
        reject(err);
        return;
      }
      /* Loaded successfully... resolve promise with "real" font name */
      loadedFonts[name] = givenName;
      resolve(givenName);
    });
  });
}



const loadFontFromFile = (name, filePath) => {
  if (!name)
    throw new Error('name is a required argument');

  if (!filePath)
    throw new Error('filePath is a required argument');

  return new Promise(function (resolve, reject) {
    ReactNativeDynamicFont.loadFontFromFile({
      name,
      filePath
    }, function (err, givenName) {
      if (err) {
        reject(err);
        return;
      }
      resolve(givenName);
    });
  });
}

const loadFonts = (_fontList, forceLoad) => {
  var fontList = _fontList;
  if (!fontList)
    return Promise.resolve([]);

  if (!(fontList instanceof Array))
    fontList = [fontList];

  return Promise.all(fontList.filter((font) => font).map((font) => loadFont(font.name, font.data, font.type, forceLoad)));
}

export { loadFont, loadFonts, loadFontFromFile }