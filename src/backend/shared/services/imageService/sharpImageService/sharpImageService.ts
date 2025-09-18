import fs from 'fs'
import sharp, { type Sharp } from 'sharp'

import type { IImageWorker } from '../baseImageService/types.ts'

import { BaseImageService } from '../baseImageService/baseImageService.ts'

class SharpImageWorker implements IImageWorker {
  private instance: Sharp
  private path: string

  constructor(imagePath: string) {
    this.instance = sharp(imagePath)
    this.path = imagePath
  }

  public async getSize() {
    const { size: sizeMeta } = await this.instance.metadata()

    if (!sizeMeta) {
      const { size } = fs.statSync(this.path)

      return size
    }

    return sizeMeta
  }

  public input(path: string) {
    this.instance = sharp(path)

    return this
  }

  public resize(imagePath: string, width: number, height: number) {
    this.instance = sharp(imagePath)
      .resize(width, height, {
        background: { alpha: 0, b: 255, g: 255, r: 255 },
        fit: sharp.fit.cover,
        kernel: sharp.kernel.nearest,
        position: 'center',
        withoutEnlargement: true,
      })
      .webp({ quality: 100 })

    return this
  }

  public async saveFile(savingPath: string) {
    await this.instance.toFile(savingPath)

    return this
  }
}

export class SharpImageService extends BaseImageService {
  constructor(imagePath: string) {
    super(imagePath, new SharpImageWorker(imagePath))
  }
}

export default SharpImageService
