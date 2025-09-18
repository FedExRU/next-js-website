import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

import { type IBaseImageServiceConfig } from './types.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const UPLOAD_PATH = '/uploads'

export const DEFAULT_CONFIG: Required<IBaseImageServiceConfig> = {
  fileNameExtension: '.webp',
  largeFileNameExtension: '.webp',
  largeFileNameSuffix: '_large',
  largeSizeDimensions: {
    height: 729,
    width: 548,
  },
  mediumFileNameExtension: '.webp',
  mediumFileNameSuffix: '_medium',
  mediumSizeDimensions: {
    height: 349,
    width: 262,
  },
  savingFolder: resolve(__dirname, `../../../../../../public${UPLOAD_PATH}`),
  savingFolderRelativePath: UPLOAD_PATH,
  smallFileNameExtension: '.webp',
  smallFileNameSuffix: '_small',
  smallSizeDimensions: {
    height: 228,
    width: 228,
  },
}

export const RESIZE_TYPES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const
