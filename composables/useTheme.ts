export function useTheme() {
  const theme = useState<string>('theme', () => 'light')

  function applyTheme(value: string) {
    if (process.client) {
      const html = document.documentElement
      if (value === 'dark') html.classList.add('dark')
      else html.classList.remove('dark')
      localStorage.setItem('theme', value)
    }
    theme.value = value
  }

  function toggleTheme() {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  // Initialize from localStorage on client
  if (process.client) {
    const stored = localStorage.getItem('theme')
    if (stored) {
      theme.value = stored
      applyTheme(stored)
    }
  }

  return { theme, applyTheme, toggleTheme }
}
