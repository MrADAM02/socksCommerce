export type ToastType = "success" | "error" | "info";

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
}

export function useCustomToast() {
  const toasts = useState<Toast[]>("toasts", () => []);
  const timers = new Map<string, ReturnType<typeof setTimeout>>();

  function genId() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }

  function dismiss(id: string) {
    toasts.value = toasts.value.filter((t) => t.id !== id);
    const timer = timers.get(id);
    if (timer) {
      clearTimeout(timer);
      timers.delete(id);
    }
  }

  function show(
    message: string,
    opts: { type?: ToastType; duration?: number } = {},
  ) {
    const id = genId();
    const duration = opts.duration ?? 3000;

    toasts.value.push({
      id,
      message,
      type: opts.type || "info",
      duration,
    });

    const timer = setTimeout(() => dismiss(id), duration);
    timers.set(id, timer);

    return id;
  }

  function pauseTimer(id: string) {
    const timer = timers.get(id);
    if (timer) {
      clearTimeout(timer);
      timers.delete(id);
    }
  }

  function resumeTimer(id: string) {
    const toast = toasts.value.find((t) => t.id === id);
    if (toast && !timers.has(id)) {
      const timer = setTimeout(() => dismiss(id), toast.duration);
      timers.set(id, timer);
    }
  }

  function clear() {
    timers.forEach((timer) => clearTimeout(timer));
    timers.clear();
    toasts.value = [];
  }

  return { toasts, show, dismiss, pauseTimer, resumeTimer, clear };
}
