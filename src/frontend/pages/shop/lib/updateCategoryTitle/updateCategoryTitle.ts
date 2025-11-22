import { eventBus } from '../../../../shared/lib'
import { EVENT_NAME } from './constants'

/**
 * Updates a category name on the shop page.
 *
 * @param {string} categoryName - Name of updated category.
 */
export const fireUpdateCategoryTitleEvent = (categoryName: string) => {
  eventBus.broadcast(EVENT_NAME, categoryName)
}

export const subscribeUpdateCategoryTitleEvent = (
  cb: (categoryName: string) => void,
) => eventBus.subscribe(EVENT_NAME, cb)
