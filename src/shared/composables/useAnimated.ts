interface SlideToggleFunction {
  (target: HTMLElement, timeout?: number): void
}

interface SlideToggleFunctions {
  slideUp: SlideToggleFunction
  slideDown: SlideToggleFunction
}

export default function useSlideToggle(
  attribute = 'aria-labelledby'
): SlideToggleFunctions {
  const timeouts: { [key: string]: number } = {}

  function pushTimeout(target: HTMLElement, timeout: number): void {
    const key: string | null = target.getAttribute(attribute)
    if (key) {
      if (timeouts[key] !== undefined) {
        clearTimeout(timeouts[key])
      }
      timeouts[key] = timeout
    }
  }

  function slideUp(target: HTMLElement, duration = 500): void {
    target.style.transitionProperty = 'height, margin, padding'
    target.style.transitionDuration = `${duration}ms`
    target.style.boxSizing = 'border-box'
    target.style.height = `${target.offsetHeight}px`
    target.offsetHeight
    target.style.overflow = 'hidden'
    target.style.height = '0'
    target.style.paddingTop = '0'
    target.style.paddingBottom = '0'
    target.style.marginTop = '0'
    target.style.marginBottom = '0'

    const timeout: number = window.setTimeout(() => {
      target.style.display = 'none'
      target.style.removeProperty('height')
      target.style.removeProperty('padding-top')
      target.style.removeProperty('padding-bottom')
      target.style.removeProperty('margin-top')
      target.style.removeProperty('margin-bottom')
      target.style.removeProperty('overflow')
      target.style.removeProperty('transition-duration')
      target.style.removeProperty('transition-property')
    }, duration)
    pushTimeout(target, timeout)
  }

  function slideDown(target: HTMLElement, duration = 500): void {
    target.style.removeProperty('display')
    let { display } = window.getComputedStyle(target)

    if (display === 'none') {
      display = 'block'
    }

    target.style.display = display
    const height: number = target.offsetHeight
    target.style.overflow = 'hidden'
    target.style.height = '0'
    target.style.paddingTop = '0'
    target.style.paddingBottom = '0'
    target.style.marginTop = '0'
    target.style.marginBottom = '0'
    target.offsetHeight
    target.style.boxSizing = 'border-box'
    target.style.transitionProperty = 'height, margin, padding'
    target.style.transitionDuration = `${duration}ms`
    target.style.height = `${height}px`
    target.style.removeProperty('padding-top')
    target.style.removeProperty('padding-bottom')
    target.style.removeProperty('margin-top')
    target.style.removeProperty('margin-bottom')

    const timeout: number = window.setTimeout(() => {
      target.style.removeProperty('height')
      target.style.removeProperty('overflow')
      target.style.removeProperty('transition-duration')
      target.style.removeProperty('transition-property')
    }, duration)
    pushTimeout(target, timeout)
  }

  return { slideUp, slideDown }
}
