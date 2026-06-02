export function useCustomToast() {
  const toasts = useState<any[]>('toasts', () => [])

  function genId() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
  }

  function show(message: string, opts: { type?: 'success' | 'error' | 'info'; duration?: number } = {}) {
    const id = genId()
    const toast = {
      id,
      message,
      type: opts.type || 'info',
    }
    toasts.value.push(toast)

    const duration = opts.duration ?? 3000
    setTimeout(() => {
      toasts.value = toasts.value.filter((t) => t.id !== id)
    }, duration)
  }

  function clear() {
    toasts.value = []
  }

  return { toasts, show, clear }
}
