/** @internal */

/**
 * Main entry point for SDK
 */

import {
  Reward,
  CustomPermission,
  CustomPermissionName,
  CustomPermissionStatus,
  CustomPermissionResult,
  ShareInfoType,
  ScreenOrientation,
  AccessTokenData,
  Contact,
  Points,
  HostEnvironmentInfo,
  DownloadFileHeaders,
  Platform,
  MessageToContact,
  AuthorizationFailureError,
  AudienceNotSupportedError,
  DownloadFailedError,
  DownloadHttpError,
  InvalidUrlError,
  MiniAppError,
  SaveFailureError,
  ScopesNotSupportedError,
  SecureStorageFullError,
  IOError,
  StorageUnavailable,
  UnavailableItem,
  EmptyStorage,
  FailedDeleteError,
  StorageOccupiedError,
} from '../../js-miniapp-bridge/src';

import { MiniApp } from './miniapp';
import { MiniAppEvents, MiniAppKeyboardEvents } from './event-types';

/** @internal */
const miniAppInstance = new MiniApp();

export default miniAppInstance;
export {
  CustomPermission,
  CustomPermissionName,
  CustomPermissionStatus,
  CustomPermissionResult,
  Reward,
  ShareInfoType,
  ScreenOrientation,
  AccessTokenData,
  Contact,
  Points,
  DownloadFileHeaders,
  HostEnvironmentInfo,
  Platform,
  MessageToContact,
  AuthorizationFailureError,
  AudienceNotSupportedError,
  DownloadFailedError,
  DownloadHttpError,
  InvalidUrlError,
  MiniAppError,
  SaveFailureError,
  ScopesNotSupportedError,
  MiniAppEvents,
  MiniAppKeyboardEvents,
  SecureStorageFullError,
  IOError,
  StorageUnavailable,
  UnavailableItem,
  EmptyStorage,
  FailedDeleteError,
  StorageOccupiedError,
};
