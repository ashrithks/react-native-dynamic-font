
import { NativeModules } from 'react-native';

const { ReactNativeDynamicFont } = NativeModules;


function loadFontFromFile(name, filePath) {
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

module.exports = {
  loadFontFromFile: loadFontFromFile
}