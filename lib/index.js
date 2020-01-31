
import { NativeModules } from 'react-native';

const { ReactNativeDynamicFont } = NativeModules;

const loadFont = (name, data, type) => {
  if (!name) throw new Error('Name is a required argument');

  if (!data) throw new Error('Data is a required argument');

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
      resolve(givenName);
    });
  });
};

const loadFontFromFile = (name, filePath) => {
  if (!name) throw new Error('name is a required argument');

  if (!filePath) throw new Error('filePath is a required argument');

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
};

export default { loadFont, loadFontFromFile };
//# sourceMappingURL=index.js.map