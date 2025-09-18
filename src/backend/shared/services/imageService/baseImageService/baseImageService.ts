import { parse } from 'path'

import type {
  IBaseImageService,
  IBaseImageServiceConfig,
  IImageWorker,
  ResizeType,
} from './types.ts'

import { DEFAULT_CONFIG, RESIZE_TYPES } from './constants.ts'

export class BaseImageService implements IBaseImageService {
  private config: Required<IBaseImageServiceConfig>
  private fileName: string = ''
  private sourcePath: string = ''
  private worker: Required<IImageWorker>

  constructor(
    sourcePath: string,
    worker: IImageWorker,
    config?: IBaseImageServiceConfig,
  ) {
    this.config = {
      ...DEFAULT_CONFIG,
      ...config,
      largeSizeDimensions: {
        ...DEFAULT_CONFIG.largeSizeDimensions,
        ...config?.largeSizeDimensions,
      },
      mediumSizeDimensions: {
        ...DEFAULT_CONFIG.mediumSizeDimensions,
        ...config?.mediumSizeDimensions,
      },
      smallSizeDimensions: {
        ...DEFAULT_CONFIG.smallSizeDimensions,
        ...config?.smallSizeDimensions,
      },
    }

    this.worker = worker
    this.input(sourcePath)
  }

  public getSavedImagePath(absolute?: boolean) {
    const { savingFolder, savingFolderRelativePath } = this.config

    return `${absolute ? savingFolder : savingFolderRelativePath}/${this.fileName}`
  }

  public async getSize() {
    return this.worker.getSize()
  }

  public input(path: string) {
    const { name } = parse(path)
    const { fileNameExtension } = this.config

    this.worker.input(path)
    this.sourcePath = path
    this.fileName = `${name}${fileNameExtension}`

    return this
  }

  public resizeLarge() {
    this.worker.resize(
      this.sourcePath,
      this.config.largeSizeDimensions.width,
      this.config.largeSizeDimensions.height,
    )

    this.fileName = this.getFileName(RESIZE_TYPES.LARGE)

    return this
  }

  public resizeMedium() {
    this.worker.resize(
      this.sourcePath,
      this.config.mediumSizeDimensions.width,
      this.config.mediumSizeDimensions.height,
    )

    this.fileName = this.getFileName(RESIZE_TYPES.MEDIUM)

    return this
  }

  public resizeSmall() {
    this.worker.resize(
      this.sourcePath,
      this.config.smallSizeDimensions.width,
      this.config.smallSizeDimensions.height,
    )

    this.fileName = this.getFileName(RESIZE_TYPES.SMALL)

    return this
  }

  public async save() {
    const { savingFolder } = this.config

    await this.worker.saveFile(`${savingFolder}/${this.fileName}`)

    return this
  }

  private getFileName(resizeType?: ResizeType) {
    const { name } = parse(this.sourcePath)
    const {
      fileNameExtension,
      largeFileNameExtension,
      largeFileNameSuffix,
      mediumFileNameExtension,
      mediumFileNameSuffix,
      smallFileNameExtension,
      smallFileNameSuffix,
    } = this.config
    let filename = ''

    switch (resizeType) {
      case RESIZE_TYPES.LARGE:
        filename = `${name}${largeFileNameSuffix}${largeFileNameExtension ?? fileNameExtension}`
        break
      case RESIZE_TYPES.MEDIUM:
        filename = `${name}${mediumFileNameSuffix}${mediumFileNameExtension ?? fileNameExtension}`
        break
      case RESIZE_TYPES.SMALL:
        filename = `${name}${smallFileNameSuffix}${smallFileNameExtension ?? fileNameExtension}`
        break
      default:
        filename = `${name}${fileNameExtension}`
        break
    }

    return filename
  }
}
