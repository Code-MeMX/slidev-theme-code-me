import { onMounted, onUnmounted } from 'vue'
import { useNav } from '@slidev/client'

let activeInstances = 0
let cleanupFn: (() => void) | null = null

function canElementScroll(target: HTMLElement | null, deltaY: number): boolean {
  let el: HTMLElement | null = target
  while (el && el.id !== 'slide-container' && el !== document.body) {
    const style = window.getComputedStyle(el)
    const overflowY = style.overflowY
    const isScrollable = (overflowY === 'auto' || overflowY === 'scroll') && el.scrollHeight > el.clientHeight + 1
    if (isScrollable) {
      if (deltaY > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 1)
        return true
      if (deltaY < 0 && el.scrollTop > 1)
        return true
    }
    el = el.parentElement
  }
  return false
}

export function useWheelNavigation() {
  const { next, prev, isPlaying, isPrintMode, currentSlideRoute } = useNav()

  onMounted(() => {
    activeInstances++
    if (activeInstances > 1)
      return

    let accumulatedY = 0
    let lastWheelTime = 0
    let lockedUntil = 0

    const THRESHOLD = 36
    const COOLDOWN_MS = 450
    const GESTURE_GAP_MS = 120

    const onWheel = (e: WheelEvent) => {
      if (!isPlaying.value || isPrintMode.value)
        return
      if (e.ctrlKey || e.metaKey)
        return

      const target = e.target as HTMLElement | null
      if (!target || !target.closest('#slide-container'))
        return
      if (target.closest('input, textarea, select, [contenteditable="true"], .monaco-editor'))
        return

      // Ignore predominantly horizontal gestures
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY))
        return

      // Allow inner scrollable containers (e.g. long code blocks) to scroll naturally
      if (canElementScroll(target, e.deltaY))
        return

      e.preventDefault()

      const now = performance.now()
      if (now - lastWheelTime > GESTURE_GAP_MS)
        accumulatedY = 0
      lastWheelTime = now

      if (now < lockedUntil) {
        accumulatedY = 0
        return
      }

      const fm = (currentSlideRoute.value?.meta?.slide as any)?.frontmatter ?? {}
      const directionFactor = fm.wheelInvert ? -1 : 1
      accumulatedY += e.deltaY * directionFactor

      if (Math.abs(accumulatedY) >= THRESHOLD) {
        if (accumulatedY > 0)
          next()
        else
          prev()

        accumulatedY = 0
        lockedUntil = now + COOLDOWN_MS
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    cleanupFn = () => {
      window.removeEventListener('wheel', onWheel)
    }
  })

  onUnmounted(() => {
    activeInstances = Math.max(0, activeInstances - 1)
    if (activeInstances === 0 && cleanupFn) {
      cleanupFn()
      cleanupFn = null
    }
  })
}
