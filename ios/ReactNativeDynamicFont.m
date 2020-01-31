
#import "ReactNativeDynamicFont.h"
#import <CoreText/CoreText.h>
#import <UIKit/UIKit.h>

@implementation ReactNativeDynamicFont

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(
  loadFontFromFile:(NSString*)name (NSString*)path
  resolve:(RCTPromiseResolveBlock)resolve
  reject:(RCTPromiseRejectBlock)reject)
{
    // Allocate a Dictionary.
    const NSMutableDictionary* response = [[NSMutableDictionary alloc]initWithCapacity:10];
    NSData *data = [[NSFileManager defaultManager] contentsAtPath:path];
    CFErrorRef error;
    CGDataProviderRef provider = CGDataProviderCreateWithCFData((CFDataRef)data);
    CGFontRef font = CGFontCreateWithDataProvider(provider);
    if (! CTFontManagerRegisterGraphicsFont(font, &error)) {
        CFStringRef errorDescription = CFErrorCopyDescription(error);
        NSLog(@"Failed to load font: %@", errorDescription);
        CFRelease(errorDescription);
    }
    CFRelease(font);
    CFRelease(provider);
    // Resolve to the caller.
    resolve(response);
}

@end
  