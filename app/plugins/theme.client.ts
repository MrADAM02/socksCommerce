export default defineNuxtPlugin(() => {
  if (process.client) {
    const stored = localStorage.getItem('theme')
    const html = document.documentElement
    if (stored === 'dark') html.classList.add('dark')
    else html.classList.remove('dark')
  }
})
