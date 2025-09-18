import { RESIZE_TYPES } from './constants.ts'

export interface IBaseImageService {
  getSavedImagePath: (absolute?: boolean) => string
  getSize: () => Promise<number>
  input: (path: string) => IBaseImageService
  resizeLarge: () => IBaseImageService
  resizeMedium: () => IBaseImageService
  resizeSmall: () => IBaseImageService
  save: () => Promise<IBaseImageService>
}

export interface IBaseImageServiceConfig {
  fileNameExtension?: string
  largeFileNameExtension?: string
  largeFileNameSuffix?: string
  largeSizeDimensions?: IImageDimensions
  mediumFileNameExtension?: string
  mediumFileNameSuffix?: string
  mediumSizeDimensions?: IImageDimensions
  savingFolder?: string
  savingFolderRelativePath?: string
  smallFileNameExtension?: string
  smallFileNameSuffix?: string
  smallSizeDimensions?: IImageDimensions
}

export interface IImageDimensions {
  height: number
  width: number
}

export interface IImageWorker {
  getSize: () => Promise<number>
  input: (path: string) => IImageWorker
  resize: (imagePath: string, width: number, height: number) => IImageWorker
  saveFile: (savingPath: string) => Promise<IImageWorker>
}

export type ResizeType = (typeof RESIZE_TYPES)[keyof typeof RESIZE_TYPES]
