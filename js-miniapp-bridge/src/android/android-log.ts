/* tslint:disable:no-any */
import { MiniAppSDKLogger, PlatformLogger } from '../common-log';

class AndroidSDKLogger implements PlatformLogger {
  log(emoji, type, args) {
    (window as any).MiniAppAndroid.postMessage(
      `${emoji} console.${type}: ${Object.values(args)
        .map(v => {
          if (typeof v === 'undefined') return 'undefined';
          else if (typeof v === 'object') return JSON.stringify(v);
          else return v.toString();
        })
        .map(v => v.substring(0, 3000)) // Limit msg to 3000 chars
        .join(', ')}`
    );
  }
}

const androidLogger = new AndroidSDKLogger();
(window as any).MiniAppSDKLogger = new MiniAppSDKLogger(androidLogger);
