import { DocumentData, QuerySnapshot } from 'firebase/firestore/lite'
import { FirebaseResult } from './types'

export const getResult = <T extends DocumentData = DocumentData>(
  snapshot: Promise<QuerySnapshot>,
) =>
  snapshot.then<FirebaseResult<T>>(snap => {
    const result: FirebaseResult<T> = {
      items: [] as T[],
      count: 0,
    }

    snap.forEach(item => {
      result.items.push(item.data() as T)
    })

    result.count = snap.size

    return result
  })
