
package com.ashrithks.dynamicfont;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.views.text.ReactFontManager;

import android.app.Activity;
import android.graphics.Typeface;
import android.util.Base64;

import java.io.File;
import java.io.FileOutputStream;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class ReactNativeDynamicFontModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public ReactNativeDynamicFontModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "ReactNativeDynamicFont";
  }

  @ReactMethod
  public void loadFontFromFile(final ReadableMap options, final Callback callback) {
    Activity currentActivity = getCurrentActivity();
    if (currentActivity == null) {
      callback.invoke("Invalid activity");
      return;
    }

    String filePath = options.hasKey("filePath") ? options.getString("filePath") : null,
           name = (options.hasKey("name")) ? options.getString("name") : null;

    if (filePath == null || filePath.length() == 0) {
      callback.invoke("filePath property empty");
      return;
    }

    File f = new File(filePath);

    if (f.exists() && f.canRead()) {
      boolean wasLoaded = false;
      try {
        Typeface typeface = Typeface.createFromFile(f);
        //Cache the font for react
        ReactFontManager.getInstance().setTypeface(name, typeface.getStyle(), typeface);
        wasLoaded = true;
      } catch (Throwable e) {
        callback.invoke(e.getMessage());
      } finally {
        if (wasLoaded) {
          callback.invoke(null, name);
        }
      }
    } else {
      callback.invoke("invalid file");
    }
  }
}