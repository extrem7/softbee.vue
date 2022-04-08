const subscribers: [string, () => void][] = []

const subscribe = (filter: string, callback: () => void) => {
  subscribers.push([filter, callback])
}

export const dispatch = (type: string) => {
  subscribers.forEach(([eventType, callback]) => {
    if (eventType !== type) return

    callback()
  })
}

const useBus = (type: string, callback: () => void) => {
  subscribe(type, callback)

  return dispatch
}

export { useBus }
